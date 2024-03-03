import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
  createData(
    'CSE320',
    'Advanced Algorithms',
    'AA',
    4,
    'Monsoon',
    'CSE102',
    'None',
  ),
  createData(
    'CSE520',
    'Advanced Biometrics',
    'BIOM',
    4,
    'Winter',
    'CSE441',
    'None',
  ),
  createData(
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    'CSE344',
    'None',
  ),
  createData(
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    'None',
    'None',
  ),
  createData(
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    'MTH201, CSE343',
    'None',
  ),
];

function createData(
  code,
  name,
  acronym,
  credits,
  semester,
  preRequisites,
  antiRequisites,
) {
  return {
    code,
    name,
    acronym,
    credits,
    semester,
    preRequisites,
    antiRequisites,
  };
}

const properties = [
  'code',
  'name',
  'acronym',
  'credits',
  'semester',
  'preRequisites',
  'antiRequisites',
];
const headers = [
  'Code',
  'Name',
  'Acronym',
  'Credits',
  'Semester',
  'Pre-requisites',
  'Anti-requisites',
];

export default function BasicTable() {
  return (
    <Paper elevation={0} sx={{ overflow: 'hidden' }} className="width-layout-1">
      <TableContainer sx={{ maxHeight: '100vh' }}>
        <Table
          stickyHeader
          style={{ border: '1px solid #e9e9e9' }}
          aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  className="body-small font-semibold text-white bg-primary-light">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                style={{ background: index % 2 ? '#e9e9e9' : 'white' }}>
                {properties.map((property, index) => (
                  <TableCell key={index} className="body-xsmall">
                    {row[property]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
