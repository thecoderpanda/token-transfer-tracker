import { Pool } from 'pg';

const pool = new Pool({
  user: 'hemera',
  host: 'localhost',
  database: 'demo',
  password: '123asd',
  port: 5432,
});

export default pool; 