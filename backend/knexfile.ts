// Update with your config settings.
const host = process.env.POSTGRES_HOST || 'postgres';
const port = parseInt(`${process.env.POSTGRES_PORT || '5432'}`);
const user = process.env.POSTGRES_DB_USER || 'postgresadmin';
const password = process.env.POSTGRES_DB_PASSWORD || 'postgres';
const database = process.env.POSTGRES_DB_NAME || 'komgo';

const connOpts = {
  client: 'postgresql',
  connection: {
    host,
    port,
    user,
    password,
    database
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "migrations"
  }
}

module.exports = {
  development: {...connOpts, seeds: { directory: './seeds/development'}},
  testing: {...connOpts, seeds: { directory: './seeds/testing'}},
  production: {...connOpts, seeds: { directory: './seeds/production'}}
}
