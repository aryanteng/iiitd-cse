import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const CareerPathChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'No of Students',
        data: chartData.values,
        backgroundColor: ['#39AEA8', '#3A8CB5', '#A37198', '#003465'],
        borderColor: [
          'rgba(255, 255,255, 1)',
          'rgba(255,255,255, 1)',
          'rgba(255,255,255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

  return <Pie data={data} options={options} />;
};

export default CareerPathChart;
