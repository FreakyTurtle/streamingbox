import { Knex } from "knex"
import { ConnectOptions } from "mongodb"

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
  POSTGRES_PORT: process.env.POSTGRES_PORT || '5432',
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME || 'postgresadmin',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  POSTGRES_DB: process.env.POSTGRES_DB || 'komgo',
  get POSTGRES_KNEX_OPTS(): Knex.Config {
    return {
      client: 'postgresql',
      connection: {
        host: this.POSTGRES_HOST,
        port: parseInt(`${this.POSTGRES_PORT}`),
        database: this.POSTGRES_DB,
        user: this.POSTGRES_USERNAME,
        password: this.POSTGRES_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "migrations"
      }
    }
  },
  MONGO_HOST: process.env.MONGO_HOST || 'mongo',
  MONGO_PORT: process.env.MONGO_PORT || '27017',
  MONGO_DB: process.env.MONGO_DB || 'komgo',
  get MONGO_URI() {
    return `mongodb://${this.MONGO_HOST}:${this.MONGO_PORT}/${this.MONGO_DB}`
  },
  MONGO_FILE_BUCKET: process.env.MONGO_FILE_BUCKET || 'files'
}

export default config