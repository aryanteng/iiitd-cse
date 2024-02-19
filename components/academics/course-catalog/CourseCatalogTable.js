import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

const HeaderCell = ({ children }) => {
  return (
    <TableCell className="body-small font-semibold border border-black text-white">
      {children}
    </TableCell>
  );
};

const ModifiedTableCell = ({ children }) => {
  return (
    <TableCell className="body-xsmall border border-black">
      {children}
    </TableCell>
  );
};

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
    <TableContainer>
      <Table
        className="width-layout-1 border border-black"
        aria-label="simple table">
        <TableHead>
          <TableRow style={{ background: 'var(--primary-color)' }}>
            {headers.map((header) => (
              <HeaderCell key={header}>{header}</HeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              style={{ background: index % 2 ? '#e9e9e9' : 'white' }}>
              {properties.map((property) => (
                <ModifiedTableCell key={property}>
                  {row[property]}
                </ModifiedTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
