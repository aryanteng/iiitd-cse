import Banner from '@/components/landing/Banner';
import MissionAndVision from '@/components/landing/MissionAndVision';
import { getSheetData } from './api/sheets';

export default async function Home() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Sheet1!A1:B10';

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div className="[&>*:nth-child(even)]:bg-gg w-full">
        <Banner />
        <MissionAndVision
          name={'Mission'}
          description={
            'The mission of the department is to establish itself as a world-class entity by conducting advanced research and development in diverse areas of computer science, as well as applying computer and software technologies across various domains. Additionally, the department is committed to training and educating engineers of exceptional caliber at both undergraduate and postgraduate levels, with the aim of molding them into innovators and creators of new products.'
          }
        />
        <MissionAndVision
          name={'Vision'}
          description={
            'The vision of the department is to evolve into a globally respected, world-class entity, renowned for its research capabilities. It aspires to have some research groups recognized as global and national leaders. The department is committed to nurturing thriving undergraduate and postgraduate programs, ensuring its relevance to society. It aims to maintain a global presence and establish strong connections with industry, reinforcing its position as an industry-facing and socially relevant institution.'
          }
          isReverse={true}
        />
      </div>
    </main>
  );
}
