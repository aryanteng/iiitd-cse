'use client';
import StyledTable from '@/components/people/students/mtechTable.js';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme.js';
import { useRef } from 'react';

function createData(serialNumber, name, email, researchInterests, linkedin) {
  return { serialNumber, name, email, researchInterests, linkedin };
}

const rows = [
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    1,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    2,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    3,
    'AAKARSH YOHAAN RAVI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    4,
    'DEBJIT BANERJI',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    5,
    'ADITYA GHOSH',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
  createData(
    6,
    'ADITYA AHUJA',
    'testemail123@iiitd.ac.in',
    'Machine Learning, Cloud Computing, Distributed Computing',
    'https://www.linkedin.com/company/cseiiitd/?originalSubdomain=in',
  ),
];

export default function BtechStudents() {
  let tableRef = useRef(null);
  return (
    <div className="page-layout-1">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        M.Tech. Students
      </h1>
      <StyledTable list={rows} ref={tableRef} />
    </div>
  );
}
