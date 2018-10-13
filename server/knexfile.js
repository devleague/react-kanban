// Update with your config settings.
require('dotenv').config({path: '../.env'})
// console.log(process.env)

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOSTNAME,
      port: process.env.POSTGRES_CONTAINER_PORT,
      database: process.env.POSTGRES_DB,
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
      database: 'react_kanban',
      user:     'development',
      password: 'development'
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
    client: 'postgresql',
    connection: {
      database: 'react_kanban',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
