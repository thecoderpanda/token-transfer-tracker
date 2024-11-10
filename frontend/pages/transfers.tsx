import { useEffect, useState } from 'react';
import TransferTable from '../components/TransferTable';

export default function TransfersPage() {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/transfers')
      .then(res => res.json())
      .then(data => {
        setTransfers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching transfers:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Token Transfers</h1>
      <TransferTable transfers={transfers} />
    </div>
  );
} 