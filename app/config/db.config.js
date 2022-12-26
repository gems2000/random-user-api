require('dotenv').config();
console.log(process.env.DB_HOST)
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: process.env.NODE_ENV === 'production' ? false : msg => console.info(msg)
};