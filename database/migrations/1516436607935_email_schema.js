'use strict'

const Schema = use('Schema')

class EmailSchema extends Schema {
  up () {
    this.create('emails', (table) => {
      table.increments()
      table.uuid('uuid').unique()
      table.integer('contact_id').unsigned().index()
      table.string('account')
      table.timestamps()
    })
  }

  down () {
    this.drop('emails')
  }
}

module.exports = EmailSchema
