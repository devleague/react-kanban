// Update with your config settings.
require('dotenv').config({path: '../.env'})

console.log('process.env', process.env)

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_CONTAINER_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: '',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_CONTAINER_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
