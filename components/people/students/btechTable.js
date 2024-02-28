import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { ThemeProvider, styled } from '@mui/material/styles';
import * as React from 'react';
import { theme } from '@/theme/theme.js';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TableVirtuoso } from 'react-virtuoso';

//Removed pagination functionality. May use in the
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>

      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const StyledTable = React.forwardRef(function StyledTable(props, ref) {
  const { list, allowPagination, ...other } = props;
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer
          sx={{
            maxHeight: '75vh',
          }}
          component={Paper}
          ref={ref}
          {...other}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: 'primary.light' }}>
                  <span className="text-white body-small">Serial Number</span>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: 'primary.light' }}>
                  <span className="text-white body-small">Roll Number</span>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: 'primary.light' }}>
                  <span className="text-white body-small">Name</span>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ backgroundColor: 'primary.light' }}>
                  <span className="text-white body-small">Joining Year</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.serialNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="td" scope="row" align="center">
                    <span className="body-xsmall">{row.serialNumber}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="body-xsmall">{row.rollNumber}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="body-xsmall">{row.name}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="body-xsmall">{row.joiningYear}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
});

export default StyledTable;
