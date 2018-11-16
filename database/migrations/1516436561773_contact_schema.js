'use strict'

const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.uuid('uuid')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
