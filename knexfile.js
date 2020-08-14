// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '5.6',
    connection: {
      host : '162.214.127.97',
      user : 'dstudium_cardapio_system',
      password : 'LEVHXD]9NBa&',
      database : 'dstudium_cardapiodigital'
    },
    debug: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault  : true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
      database: 'my_db',
      user:     'username',
      password: 'password'
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
