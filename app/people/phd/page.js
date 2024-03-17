import { getSheetData } from '@/app/api/sheets';
import PhdCard from '@/components/people/phd/PhdCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';

export default async function Phd() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Phd Students';

  const data = await getSheetData(spreadsheetId, range);
  const phd = normalizeSheetData(data);
  return (
    <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
      {phd.map((prof, index) => (
        <PhdCard key={index} {...prof} />
      ))}
    </div>
  );
}