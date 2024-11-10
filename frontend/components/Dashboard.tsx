"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTransfers } from '../services/api';
import TransferTable from './TransferTable';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const Dashboard = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransfers();
        console.log('Fetched data:', data);
        setTransfers(data);
      } catch (err) {
        console.error('Error details:', err);
        setError('Failed to fetch transfers');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingMessage>Loading transfers...</LoadingMessage>;
  }

  if (error) {
    return <LoadingMessage>{error}</LoadingMessage>;
  }

  return (
    <DashboardWrapper>
      <Section>
        <h2>Recent Token Mints</h2>
        <TransferTable transfers={transfers} />
      </Section>
    </DashboardWrapper>
  );
};

export default Dashboard;
