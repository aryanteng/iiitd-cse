import CourseCatalogTable from '@/components/academics/course-catalog/CourseCatalogTable';

export default function CourseCatalog() {
  return (
    <div className="padding-layout-2 flex flex-col items-center justify-center gap-4">
      <h2 className="title">Course Catalog</h2>
      <CourseCatalogTable />
    </div>
  );
}
