'use client';
import DataTable from '@/components/common/DataTable';
import LinkedIn from '@mui/icons-material/LinkedIn';

function createData(serialNumber, name, email, researchInterests, linkedin) {
  return { serialNumber, name, email, researchInterests, linkedin };
}

let columns = [
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
    name: 'Email',
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
    name: 'Research Interests',
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
    name: 'LinkedIn',
    options: {
      customBodyRender: (value) => {
        return (
          <a href={value} target="_blank" rel="noreferrer">
            <LinkedIn className="text-primary-dark body-2xlarge" />
          </a>
        );
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
];

const rows = [
  [
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    2,
    'ANIKET KUMAR',
    'testmail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    3,
    'ANSHUL KUMAR',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    4,
    'VIKRAM SINGH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    5,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    6,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    7,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    8,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    9,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    11,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    12,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    13,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    14,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    15,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    16,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
  [
    17,
    'HARISH BHATIA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ],
];

export default function MtechStudents() {
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        M.Tech. Students
      </h1>
      <DataTable columns={columns} data={rows} initialRows={5} />
    </div>
  );
}
