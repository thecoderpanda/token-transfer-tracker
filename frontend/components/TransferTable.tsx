import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

const Th = styled.th`
  padding: 1rem;
  background-color: #f5f5f5;
  color: #3a3f51;
  text-align: left;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Row = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

interface Transfer {
  address: string;
  token_address: string;
  token_id: number;
  block_number: number;
  block_timestamp: string;
  transaction_hash: string;
  log_index: number;
  create_time: string;
  update_time: string;
  reorg: boolean;
}

interface Props {
  transfers: Transfer[];
}

const formatAddress = (address: string | null) => {
  if (!address) return 'N/A';
  const cleanAddress = address.toString().replace('\\x', '');
  return `${cleanAddress.slice(0, 6)}...${cleanAddress.slice(-4)}`;
};

const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleString();
};

const TransferTable: React.FC<Props> = ({ transfers }) => (
  <Table>
    <thead>
      <tr>
        <Th>Address</Th>
        <Th>Token Address</Th>
        <Th>Token ID</Th>
        <Th>Block</Th>
        <Th>Timestamp</Th>
        <Th>Transaction</Th>
        <Th>Log Index</Th>
      </tr>
    </thead>
    <tbody>
      {transfers.map((transfer) => (
        <Row key={`${transfer.transaction_hash}-${transfer.log_index}`}>
          <Td>{formatAddress(transfer.address)}</Td>
          <Td>{formatAddress(transfer.token_address)}</Td>
          <Td>{transfer.token_id}</Td>
          <Td>{transfer.block_number}</Td>
          <Td>{formatDate(transfer.block_timestamp)}</Td>
          <Td>{formatAddress(transfer.transaction_hash)}</Td>
          <Td>{transfer.log_index}</Td>
        </Row>
      ))}
    </tbody>
  </Table>
);

export default TransferTable;
