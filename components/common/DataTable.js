import React, { useCallback } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function DataTable({ data, columns, initialRows }) {
  const getMuiTheme = useCallback(
    () =>
      createTheme({
        typography: {
          fontFamily: ['Montserrat'],
        },
        components: {
          MuiInputBase: {
            styleOverrides: {
              input: {
                color: 'white',
              },
            },
          },
          MUIDataTable: {
            styleOverrides: {
              paper: {
                margin: 'auto',
              },
            },
          },
          MUIDataTableToolbar: {
            styleOverrides: {
              root: {
                backgroundColor: '#007065',
                minHeight: 0,
              },
              actions: {
                color: 'white',
              },
            },
          },
          MUIDataTableHeadCell: {
            styleOverrides: {
              root: {
                backgroundColor: '#007065',
                padding: '0.5rem',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '1.1rem',
                width: 150,
                color: 'white',
              },
            },
          },
          MUIDataTableBodyCell: {
            styleOverrides: {
              root: {
                justifyContent: 'center',
                textAlign: 'center',
              },
            },
          },
        },
      }),
    [],
  );
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        data={data}
        columns={columns}
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
    </ThemeProvider>
  );
}

export default DataTable;
