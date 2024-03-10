import CourseCatalogTable from '@/components/academics/course-catalog/CourseCatalogTable';
import { getSheetData } from '@/app/api/sheets';

export default async function CourseCatalog() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Course Catalog';
  const data = await getSheetData(spreadsheetId, range);
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-main text-center p-8">
        Course Catalog
      </h1>
      <div className="table-container mb-8">
        <CourseCatalogTable data={data.slice(1)} initialRows={10} />
      </div>
    </div>
  );
}
