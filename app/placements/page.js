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
        backgroundColor: themeConstants.primary.darkblue,
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
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-body mt-5 mb-5 text-primary-dark font-bold text-center mb-8">
        Placements
      </h1>
      <BatchSelect batches={batches} onBatchChange={handleBatchChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {/* Wrap the chart and heading in a div */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-center font-body mt-4 mb-6 text-primary-dark font-bold">
            Career Paths of Students
          </h2>
          {/* Chart container with restricted size */}
          <div className="w-full max-w-sm">
            {' '}
            {/* Adjust the max-w to fit the chart size */}
            <div className="aspect-w-1 aspect-h-1">
              <CareerPathChart chartData={careerPathData} />
            </div>
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 max-w-50">
          {' '}
          {/* 1:1 aspect ratio */}
          <h2 className="text-4xl text-center font-body mt-4 mb-6 text-primary-dark font-bold font-underline">
            Placement Stats
          </h2>
          <div className="relative w-full h-full">
            <PlacementStatsChart chartData={placementStatsData} />
          </div>
        </div>
      </div>
      {/* Our Recruiters Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-body text-center text-primary-dark font-bold mb-4">
          Our Recruiters
        </h2>
        <Marquee gradient={false} speed={100}>
          {logos.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={{ height: '500px' }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PlacementsPage;
