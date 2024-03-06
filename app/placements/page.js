'use client';
import BatchSelect from '@/components/placements/BatchSelect';
import CareerPathChart from '@/components/placements/CareerPathChart';
import PlacementStatsChart from '@/components/placements/PlacementStatsChart';
import Marquee from 'react-fast-marquee';
import themeConstants from '@/theme/themeConstants';
import { useState } from 'react';
const PlacementsPage = () => {
  //5 logos for companies stored in public/images/placements with names marquee1.png and so on
  const logos = [
    { src: '/images/placements/marquee1.png', alt: 'marquee1' },
    { src: '/images/placements/marquee2.png', alt: 'marquee2' },
    { src: '/images/placements/marquee3.png', alt: 'marquee3' },
    { src: '/images/placements/marquee4.png', alt: 'marquee4' },
    { src: '/images/placements/marquee5.png', alt: 'marquee5' },
  ];

  // Data for CareerPathChart
  const careerPathData = {
    labels: [
      'Placed in Companies/Govt Organizations',
      'Higher Studies',
      'Entrepreneurship',
      'Unplaced',
    ],
    values: [116, 17, 0, 5],
  };

  const placementStatsData = {
    labels: ['B.Tech', 'M.Tech'],
    datasets: [
      {
        label: 'Lowest',
        data: [9, 8], // Replace these numbers with your actual data
        backgroundColor: '#A37198',
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Average',
        data: [25, 21], // Replace these numbers with your actual data
        backgroundColor: themeConstants.primary.dark,
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Median',
        data: [22, 19], // Replace these numbers with your actual data
        backgroundColor: ['#003465'],
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Highest',
        data: [51.3, 51.3], // Replace these numbers with your actual data
        backgroundColor: themeConstants.primary.light, // Add this color to your themeConstants if not present
        borderColor: themeConstants.primary.dark, // Add this color to your themeConstants if not present
      },
    ],
  };
  const [currentBatch, setCurrentBatch] = useState('2022-23');
  const batches = ['2022-23', '2021-22', '2020-21', '2019-20'];
  const handleBatchChange = (newBatch) => {
    setCurrentBatch(newBatch);
    // Fetch new data for the selected batch or update the state to be added later
  };
  return (
    <div className="page-layout-1 text-primary-dark text-center">
      <h1 className="heading-1">Placements</h1>
      <BatchSelect batches={batches} onBatchChange={handleBatchChange} />
      <div className="flex flex-wrap justify-between items-start gap-10">
        <div className="flex flex-col items-center w-full lg:w-2/5 px-2">
          <h2 className="heading-2">Career Paths of Students</h2>
          <div className="w-full" style={{ maxWidth: 'calc(100% - 7rem)' }}>
            <CareerPathChart chartData={careerPathData} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 px-2">
          <h2 className="heading-2">Placement Stats</h2>
          <div className="w-full">
            <PlacementStatsChart chartData={placementStatsData} />
          </div>
        </div>
      </div>
      <div className="padding-layout-2">
        <h2 className="heading-2">Our Recruiters</h2>
        <Marquee gradient={false} speed={100}>
          {logos.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="mx-auto h-48 md:h-64"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PlacementsPage;
