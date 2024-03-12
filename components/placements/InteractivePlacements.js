'use client';
import React, { useState, useEffect } from 'react';
import BatchSelect from './BatchSelect';
import CareerPathChart from './CareerPathChart';
import PlacementStatsChart from './PlacementStatsChart';
import Marquee from 'react-fast-marquee';
import themeConstants from '@/theme/themeConstants';

const logos = [
  { src: '/images/placements/marquee1.png', alt: 'marquee1' },
  { src: '/images/placements/marquee2.png', alt: 'marquee2' },
  { src: '/images/placements/marquee3.png', alt: 'marquee3' },
  { src: '/images/placements/marquee4.png', alt: 'marquee4' },
  { src: '/images/placements/marquee5.png', alt: 'marquee5' },
];

const InteractivePlacements = ({ placementsData }) => {
  const [currentBatch, setCurrentBatch] = useState(placementsData[0].batch);
  const [selectedBatchData, setSelectedBatchData] = useState(placementsData[0]);

  useEffect(() => {
    setSelectedBatchData(
      placementsData.find((data) => data.batch === currentBatch),
    );
  }, [currentBatch, placementsData]);

  // Prepare the chart data for CareerPathChart
  const careerPathData = {
    labels: [
      'Placed in Companies/Govt Organizations',
      'Higher Studies',
      'Entrepreneurship',
      'Unplaced',
    ],
    values: [
      parseFloat(selectedBatchData['placed_in_companies/govt_organizations']) ||
        0,
      parseFloat(selectedBatchData['higher_studies']) || 0,
      parseFloat(selectedBatchData['entrepreneurship']) || 0,
      parseFloat(selectedBatchData['unplaced']) || 0,
    ],
  };

  // Prepare the chart data for PlacementStatsChart
  const placementStatsData = {
    labels: ['B.Tech', 'M.Tech'],
    datasets: [
      {
        label: 'Lowest Salary',
        data: [
          parseFloat(selectedBatchData['b.tech_lowest']) || 0,
          parseFloat(selectedBatchData['m.tech_lowest']) || 0,
        ],
        backgroundColor: ['#A37198'],
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Average Salary',
        data: [
          parseFloat(selectedBatchData['b.tech_average']) || 0,
          parseFloat(selectedBatchData['m.tech_average']) || 0,
        ],
        backgroundColor: themeConstants.primary.dark,
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Median Salary',
        data: [
          parseFloat(selectedBatchData['b.tech_median']) || 0,
          parseFloat(selectedBatchData['m.tech_median']) || 0,
        ],
        backgroundColor: ['#003465'],
        borderColor: themeConstants.primary.light,
      },
      {
        label: 'Highest Salary',
        data: [
          parseFloat(selectedBatchData['b.tech_highest']) || 0,
          parseFloat(selectedBatchData['m.tech_highest']) || 0,
        ],
        backgroundColor: themeConstants.primary.light,
        borderColor: themeConstants.primary.dark,
      },
    ],
  };

  return (
    <div>
      <div className="body-2xlarge font-bold text-primary-dark text-center p-4">
        Placements
      </div>

      <div className="flex justify-end p-4">
        <BatchSelect
          batches={placementsData.map((data) => data.batch)}
          currentBatch={currentBatch}
          onBatchChange={setCurrentBatch}
        />
      </div>

      <div className="flex flex-wrap justify-between items-start w-full">
        <div className="flex flex-col gap-2 items-center justify-center w-full md:w-1/2 p-4">
          <div className="body-large font-bold text-primary-dark">
            Career Path of Students
          </div>
          <div
            className="w-full justify-center"
            style={{ height: '400px', width: '400px', maxWidth: '100%' }}>
            <CareerPathChart chartData={careerPathData} />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full md:w-1/2 p-4">
          <div className="body-large font-bold text-primary-dark">
            Placement Stats
          </div>
          <div className="w-full" style={{ maxWidth: '100%', height: '400px' }}>
            <PlacementStatsChart chartData={placementStatsData} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full p-10">
        <div className="body-xlarge font-bold text-primary-dark">
          Our Recruiters
        </div>
        <Marquee gradient={false} speed={100} className="mt-4">
          {logos.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="mx-auto h-64 md:h-72"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default InteractivePlacements;
