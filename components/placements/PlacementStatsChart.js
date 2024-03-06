import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const PlacementStatsChart = ({ chartData }) => {
  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Return the Bar component from react-chartjs-2, passing in the data and options
  return <Bar data={chartData} options={options} />;
};

export default PlacementStatsChart;
