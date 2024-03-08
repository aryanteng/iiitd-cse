import DataTable from '@/components/common/MtechDataTable';
import { getSheetData } from '@/app/api/sheets';

export default async function MtechStudents() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'M-Tech!A2:G1000';
  const data = await getSheetData(spreadsheetId, range);
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-8">
        M.Tech. Students
      </h1>
      <div className="table-container mb-8">
        <DataTable data={data} initialRows={5} />
      </div>
    </div>
  );
}
