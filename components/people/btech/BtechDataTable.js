'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DataTable from '@/components/common/DataTable';
import React, { useCallback } from 'react';

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
    <DataTable
      data={data}
      columns={getColumns()}
      initialRows={initialRows}
      options={{
        selectableRows: 'none',
        pagination: true,
        sort: false,
        download: false,
        print: false,
        viewColumns: false,
        filterTable: false,
        filter: false,
        rowsPerPage: initialRows,
        rowsPerPageOptions: [5, 10, 15],
      }}
    />
  );
}
