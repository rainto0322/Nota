
export default {
  PORT: 3000,
  SECRET: "nota",
  DB_NAME: "nota",
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/",
  GIT_REPO: process.env.GIT_REPO,
  GIT_TOKEN: process.env.GIT_TOKEN,
  SWAGGER: {
    path: '/docs',
    documentation: {
      info: {
        title: 'Nota\'s Documentation',
        version: '1.0.0'
      }
    }
  },
  CORS: {
    origin: ['http://localhost:3000', '*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    exposedHeaders: [],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
}