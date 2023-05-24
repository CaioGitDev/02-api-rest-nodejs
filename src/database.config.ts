import { knex as setupKnex, Knex } from 'knex'
import 'dotenv/config'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing!')
}

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite',
    connection: {
      filename: process.env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './database/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export const knex = setupKnex(config.development)
