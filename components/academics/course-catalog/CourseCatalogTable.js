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
          filter: false,
          filterType: 'checkbox',
          filterOptions: {
            names: ['1xx', '2xx', '3xx', '4xx', '5xx', '6xx', '7xx'],
            logic(code, filters) {
              if (filters.length === 0) return true; // No filter applied

              // Split the code string into individual codes
              let codes = code.split(',').map((c) => c.trim());
              const allCodes = [];
              codes.forEach((c) => {
                if (c.includes('/')) {
                  allCodes.push(...c.split('/'));
                } else {
                  allCodes.push(c);
                }
              });

              // Check each code for matching filter
              return allCodes.some((c) => {
                const codePrefix = c.match(/\d/)?.[0]; // Extract first digit
                if (!codePrefix) return false; // No numeric prefix found

                // Check if any selected filter matches the numeric prefix
                return filters.some((filter) => filter === `${codePrefix}xx`);
              });
            },
          },
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
      {
        name: 'Last offered in',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
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
