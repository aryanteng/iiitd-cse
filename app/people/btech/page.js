import DataTable from '@/components/common/BtechDataTable';
import { getSheetData } from '@/app/api/sheets';

const rows = [
  [1, 2020275, 'ADITYA GHOSH', 2020],
  [2, 2020276, 'ADITYA AHUJA', 2020],
  [3, 2020277, 'BHAGESH VERMA', 2020],
  [4, 202315, 'DIVYAM SINGH', 2020],
  [5, 2020275, 'ADITYA GHOSH', 2020],
  [6, 2020276, 'ADITYA AHUJA', 2020],
  [7, 2020277, 'BHAGESH VERMA', 2020],
  [8, 2020315, 'DIVYAM SINGH', 2020],
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
  [20, 2020315, 'DIVYAM SINGH', 2020],
];

export default async function BtechStudents() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'B-Tech!A2:D1000';
  const data = await getSheetData(spreadsheetId, range);
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-8">
        B.Tech. Students
      </h1>
      <div className="table-container mb-8">
        <DataTable data={rows} initialRows={10} />
      </div>
    </div>
  );
}
