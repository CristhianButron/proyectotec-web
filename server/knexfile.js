// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'sistema_innovacionempresarial',
      charset: 'utf8'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    } 
  },

  staging: {
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'sistema_innovacionempresarial',
      charset: 'utf8'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    } ,
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'sistema_innovacionempresarial',
      charset: 'utf8'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    } ,
    pool: {
      min: 2,
      max: 10
    },
  }

};
