import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

interface Props {
  transfers: { amount: number; timestamp: string }[];
}

const TransferChart: React.FC<Props> = ({ transfers }) => {
  const data = {
    labels: transfers.map((transfer) => transfer.timestamp),
    datasets: [
      {
        label: 'High-Value Transfers',
        data: transfers.map((transfer) => transfer.amount),
        fill: false,
        borderColor: '#3a3f51',
        backgroundColor: '#f4a261',
        pointRadius: 3,
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartWrapper>
      <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </ChartWrapper>
  );
};

export default TransferChart;
