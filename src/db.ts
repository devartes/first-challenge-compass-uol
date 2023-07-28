import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const { DB_URL } = process.env;

if (!DB_URL) {
  throw new Error('DB_URL not specified in the .env file');
}

mongoose.connect(DB_URL).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Connection error:', err);
});

const db = mongoose.connection;

export default db;
