
export default {
  PORT: 3000,
  SECRET: "nota",
  DB_NAME: "nota",
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/",
}