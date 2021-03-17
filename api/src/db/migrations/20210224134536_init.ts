import Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  return knex.schema.createTable('users', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
  }).createTable('stores', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.string('website').notNullable()
    table.string('pass').notNullable()
    table.string('buffer').notNullable()
    table.string('key').notNullable()
    table.uuid('userId').unsigned().notNullable()
    table.foreign('userId').references('id').inTable('users')
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')
  return knex.schema.dropTable('users').dropTable('stores')
}
