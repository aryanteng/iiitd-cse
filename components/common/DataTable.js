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
          MUIDataTableToolbar: {
            styleOverrides: {
              root: {
                backgroundColor: '#39AEA8',
                minHeight: 32,
                height: 48,
              },
            },
          },
          MUIDataTableHeadCell: {
            styleOverrides: {
              root: {
                backgroundColor: '#39AEA8',
                padding: '0.5rem',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '1.1rem',
                width: 200,
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
          MUIDataTableFilterList: {
            styleOverrides: {
              root: {
                backgroundColor: '#39AEA8',
                margin: 0,
                padding: 5,
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
