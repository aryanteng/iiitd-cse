import { getSheetData } from '@/app/api/sheets';
import TfCard from '@/components/people/teaching-fellows/TfCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';

export default async function Tf() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Teaching Fellows';

  const data = await getSheetData(spreadsheetId, range);
  const tfs = normalizeSheetData(data);
  return (
    <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
      {tfs.map((tf, index) => (
        <TfCard key={index} {...tf} />
      ))}
    </div>
  );
}
