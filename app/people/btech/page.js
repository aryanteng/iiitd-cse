'use client';
import DataTable from '@/components/common/DataTable';

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
    name: 'Roll Number',
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
    name: 'Joining Year',
    options: {
      customBodyRender: (value) => {
        return <span className="body-xsmall">{value}</span>;
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
];

const rows = [
  [1, 2020275, 'ADITYA GHOSH', 2020],
  [2, 2020276, 'ADITYA AHUJA', 2020],
  [3, 2020277, 'BHAGESH VERMA', 2020],
  [4, 202315, 'DIVYAM SINGH', 2020],
  [5, 2020275, 'ADITYA GHOSH', 2020],
  [6, 2020276, 'ADITYA AHUJA', 2020],
  [7, 2020277, 'BHAGESH VERMA', 2020],
  [8, 202315, 'DIVYAM SINGH', 2020],
  [9, 2020275, 'ADITYA GHOSH', 2020],
  [10, 2020276, 'ADITYA AHUJA', 2020],
  [11, 2020277, 'BHAGESH VERMA', 2020],
  [12, 202315, 'DIVYAM SINGH', 2020],
  [13, 2020275, 'ADITYA GHOSH', 2020],
  [14, 2020276, 'ADITYA AHUJA', 2020],
  [15, 2020277, 'BHAGESH VERMA', 2020],
  [16, 202315, 'DIVYAM SINGH', 2020],
  [17, 2020275, 'ADITYA GHOSH', 2020],
  [18, 2020276, 'ADITYA AHUJA', 2020],
  [19, 2020277, 'BHAGESH VERMA', 2020],
  [20, 202315, 'DIVYAM SINGH', 2020],
];

export default function BtechStudents() {
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        B.Tech. Students
      </h1>
      <DataTable columns={columns} data={rows} initialRows={10} />
    </div>
  );
}
