module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/DreamApp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
