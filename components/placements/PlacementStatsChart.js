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
  // The options object defines various settings for the chart
  const options = {
    plugins: {
      legend: {
        position: 'top', // Places the legend at the top of the chart
      },
    },
    responsive: true, // Makes the chart responsive
    scales: {
      y: {
        beginAtZero: true, // Starts the scale at zero
      },
    },
  };

  // Return the Bar component from react-chartjs-2, passing in the data and options
  return <Bar data={chartData} options={options} />;
};

export default PlacementStatsChart;
