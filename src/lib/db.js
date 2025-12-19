// src/lib/db.js
import mysql from 'mysql2/promise';


const globalForDb = global;


export const pool =
globalForDb._hunarmand_pool ||
mysql.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0,
});


if (process.env.NODE_ENV !== 'production') {
globalForDb._hunarmand_pool = pool;
}