'use client';
import DataTable from '@/components/common/DataTable';
import { useCallback } from 'react';

export default function BtechDataTable({ data, initialRows }) {
  const getColumns = useCallback(() => {
    return [
      {
        name: 'Serial Number',
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
        name: 'Roll Number',
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
        name: 'Joining year',
        options: {
          filter: false,
          filterType: 'dropdown',
          filterOptions: {
            get names() {
              const yearsSet = new Set(data.map((row) => row[3]));
              return Array.from(yearsSet).sort();
            },
            logic(year, filters) {
              if (filters.length === 0) return true;
              console.log(year, filters, filters.includes(year));
              return filters.includes(year);
            },
          },
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
    ];
  }, []);

  return (
    <DataTable data={data} columns={getColumns()} initialRows={initialRows} />
  );
}
