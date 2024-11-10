import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const result = await pool.query('SELECT * FROM erc721_token_mint ORDER BY block_timestamp DESC LIMIT 100');
    
    // Convert Buffer objects to hex strings
    const formattedData = result.rows.map(row => ({
      ...row,
      address: Buffer.from(row.address.slice(2), 'hex').toString('hex'),
      token_address: Buffer.from(row.token_address.slice(2), 'hex').toString('hex'),
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Error fetching transfers' });
  }
} 