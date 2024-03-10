'use client';
import DataTable from '@/components/common/DataTable';
import React, { useCallback } from 'react';
import Chip from '@mui/material/Chip';

export default function CourseCatalogTable({ data, initialRows }) {
  const getColumns = useCallback(() => {
    const colors = [
      '#B8D0EA',
      '#D4BACD',
      '#EEEECD',
      '#9CD1CE',
      '#E1BEBE',
      '#BFB3D7',
    ];
    let clr = 0;

    return [
      {
        name: 'Code',
        options: {
          customBodyRender: (value) => {
            let courses = value.split(', ');
            return courses.map((val, index) => {
              if (clr === 6) clr = 0;
              return (
                <Chip
                  key={index}
                  label={val}
                  className="body-xsmall mr-2 mb-2"
                  style={{ backgroundColor: colors[clr++] }}
                />
              );
            });
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Name',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Acronym',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Credits',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Semester',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Pre-requisites',
        options: {
          customBodyRender: (value) => {
            if (value === 'None') {
              return <span className="body-xsmall">None</span>;
            } else {
              let courses = value.split(', ');
              return courses.map((val, index) => {
                if (clr === 6) clr = 0;
                return (
                  <Chip
                    key={index}
                    label={val}
                    className="body-xsmall mr-2 mb-2"
                    style={{ backgroundColor: colors[clr++] }}
                  />
                );
              });
            }
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Anti-requisites',
        options: {
          customBodyRender: (value) => {
            if (value === 'None') {
              return <span className="body-xsmall">None</span>;
            } else {
              let courses = value.split(', ');
              return courses.map((val, index) => {
                if (clr === 6) clr = 0;
                return (
                  <Chip
                    key={index}
                    label={val}
                    className="body-xsmall mr-2 mb-2"
                    style={{ backgroundColor: colors[clr++] }}
                  />
                );
              });
            }
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
    ];
  });

  return (
    <DataTable data={data} columns={getColumns()} initialRows={initialRows} />
  );
}
