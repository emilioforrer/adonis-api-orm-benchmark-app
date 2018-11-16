'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.uuid('uuid')
      table.integer('contact_id').unsigned().index()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
