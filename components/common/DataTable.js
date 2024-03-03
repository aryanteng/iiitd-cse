import React, { useCallback } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function DataTable({ title, data, columns }) {
  const getMuiTheme = useCallback(
    () =>
      createTheme({
        typography: {
          fontFamily: ['Montserrat'],
        },
      }),
    [],
  );
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={{
          selectableRows: 'none',
        }}
      />
    </ThemeProvider>
  );
}

export default DataTable;
