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
                color: 'white', // Keeps the search input text white
                '&.Mui-focused': {
                  color: 'black', // Ensures the text stays black when input is focused
                },
              },
              root: {
                '&.MuiInput-underline:after': {
                  borderBottomColor: 'white', // Changes the underline color when input is focused
                },
                '&.MuiInput-underline:before': {
                  borderBottom: '1px solid white', // Changes the underline to white
                },
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
          MUIDataTablePagination: {
            styleOverrides: {
              selectIcon: {
                color: 'black', // Makes the dropdown icon black
              },
              select: {
                color: 'black', // Makes the rows per page text black
                '&.Mui-focused': {
                  color: 'black', // Ensures the text stays black when dropdown is focused
                  backgroundColor: 'white', // Changes background to white when dropdown is focused
                },
              },
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: 'white', // Changes default color for icons to white
              },
            },
          },
          // Add overrides for the MuiSelect component used within the pagination
          MuiSelect: {
            styleOverrides: {
              select: {
                color: 'black', // Text color for the select
                '&.Mui-focused': {
                  backgroundColor: 'white', // Background color when select is focused
                },
              },
              icon: {
                color: 'black', // Dropdown icon color
              },
            },
          },
          // Add overrides for the search icon
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: 'white', // Changes the color of icon buttons to white
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
