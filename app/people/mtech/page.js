import MtechDataTable from '@/components/people/mtech/MtechDataTable';
import { getSheetData } from '@/app/api/sheets';

export default async function MtechStudents() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'M-Tech';
  const data = await getSheetData(spreadsheetId, range);
  console.log(data);
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-8">
        M.Tech. Students
      </h1>
      <div className="table-container mb-8">
        <MtechDataTable data={data.slice(1)} initialRows={10} />
      </div>
    </div>
  );
}
