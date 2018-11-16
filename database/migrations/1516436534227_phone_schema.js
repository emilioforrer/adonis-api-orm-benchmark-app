'use strict'

const Schema = use('Schema')

class PhoneSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.uuid('uuid').unique()
      table.integer('contact_id').unsigned().index()
      table.string('number')
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhoneSchema
