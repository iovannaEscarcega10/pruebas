'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up() {
    this.create('people', (table) => {
      table.increments()
      table.string("name", 60)
      table.string("lastname", 200)
      table.string("email", 100)
      table.timestamps()
    })
  }

  down() {
    this.drop('people')
  }
}

module.exports = PersonSchema
