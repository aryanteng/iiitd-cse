'use client';
import StyledTable from '@/components/people/students/btechTable.js';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme.js';
import { useRef } from 'react';

function createData(serialNumber, rollNumber, name, joiningYear) {
  return { serialNumber, rollNumber, name, joiningYear };
}

const rows = [
  createData(1, 2020275, 'ADITYA GHOSH', 2020),
  createData(2, 2020276, 'ADITYA AHUJA', 2020),
  createData(3, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(4, 2020278, 'DEBJIT BANERJI', 2020),
  createData(5, 2020275, 'ADITYA GHOSH', 2020),
  createData(6, 2020276, 'ADITYA AHUJA', 2020),
  createData(7, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(8, 2020278, 'DEBJIT BANERJI', 2020),
  createData(9, 2020275, 'ADITYA GHOSH', 2020),
  createData(10, 2020276, 'ADITYA AHUJA', 2020),
  createData(11, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(12, 2020278, 'DEBJIT BANERJI', 2020),
  createData(13, 2020275, 'ADITYA GHOSH', 2020),
  createData(14, 2020276, 'ADITYA AHUJA', 2020),
  createData(15, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(16, 2020278, 'DEBJIT BANERJI', 2020),
  createData(17, 2020275, 'ADITYA GHOSH', 2020),
  createData(18, 2020276, 'ADITYA AHUJA', 2020),
  createData(19, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(20, 2020278, 'DEBJIT BANERJI', 2020),
  createData(21, 2020275, 'ADITYA GHOSH', 2020),
  createData(22, 2020276, 'ADITYA AHUJA', 2020),
  createData(23, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(24, 2020278, 'DEBJIT BANERJI', 2020),
  createData(25, 2020275, 'ADITYA GHOSH', 2020),
  createData(26, 2020276, 'ADITYA AHUJA', 2020),
  createData(27, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(28, 2020278, 'DEBJIT BANERJI', 2020),
  createData(29, 2020275, 'ADITYA GHOSH', 2020),
  createData(30, 2020276, 'ADITYA AHUJA', 2020),
  createData(31, 2020277, 'AAKARSH YOHAAN RAVI', 2020),
  createData(32, 2020278, 'DEBJIT BANERJI', 2020),
];

export default function BtechStudents() {
  let tableRef = useRef(null);
  return (
    <div className="page-layout-1">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        B.Tech. Students
      </h1>
      <StyledTable list={rows} ref={tableRef} />
    </div>
  );
}
