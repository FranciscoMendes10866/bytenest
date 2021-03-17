export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'bytenest',
      user: 'pg',
      password: 'pg',
      port: 9826
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
