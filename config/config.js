require('dotenv').config()

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql",
    define: {
      charset: "utf8",
      dialectOptions: {
        useUTC: false,
        collate: "utf8_general_ci"
      },
    },
    timezone: "+07:00",
    logging: false
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql"
  }
}
