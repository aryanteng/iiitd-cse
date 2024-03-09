import BtechDataTable from '@/components/people/btech/BtechDataTable';
import { getSheetData } from '@/app/api/sheets';

export default async function BtechStudents() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'B-Tech';
  const data = await getSheetData(spreadsheetId, range);
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-8">
        B.Tech. Students
      </h1>
      <div className="table-container mb-8">
        <BtechDataTable data={data} initialRows={10} />
      </div>
    </div>
  );
}
