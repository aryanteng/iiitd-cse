'use client';
import { useState } from 'react';
import PubCard from '@/components/publications/PubCard';
import { publications } from '@/components/publications/mockdata';

export default function Publications() {
  const ConferencePapers = 200;
  const JournalArticles = 300;

  const uniqueYears = Array.from(
    new Set(publications.map((pub) => pub.year)),
  ).sort((a, b) => b - a);

  // State to keep track of the selected year
  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <main className="padding-layout-2 px-2 md:px-10">
      <h1 className="heading-1">Publications</h1>

      <div className="text-center">
        <h2 className="heading-2 text-primary-main">Statistics</h2>
        <div className="font-medium">
          <p>
            <span className="text-primary-main">Total Conference Papers:</span>{' '}
            {ConferencePapers}
          </p>
          <p>
            <span className="text-primary-main">Total Journal Articles:</span>{' '}
            {JournalArticles}
          </p>
        </div>
      </div>

      <hr className="mt-4 border-b-2" />

      <div className="flex justify-center items-center overflow-auto">
        <ul className="flex space-x-2 overflow-auto py-6 px-3">
          {uniqueYears.map((year) => (
            <li key={year} className="list-none">
              <button
                onClick={() => handleYearClick(year)}
                className="px-4 py-2 border rounded-md transition-all duration-100 hover:shadow-md shadow focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 focus:text-primary-light">
                {year}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-b-2" />
      <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
        {publications
          .filter((pub) => pub.year === selectedYear)
          .map((pub, id) => (
            <PubCard
              key={id}
              title={pub.title}
              description={pub.description}
              year={pub.year}
              authors={pub.authors}
            />
          ))}
      </div>
    </main>
  );
}
