export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3001,
  },
  database: {
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    user: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    name: process.env.POSTGRES_DB || 'kupipodariday',
    synchronize: process.env.SYNCHRONIZE,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'JWT-SECRET',
  },
});
