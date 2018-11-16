'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Email extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'CommonHook.generateUuid')
  }

  static castDates(field, value) {
    return value.toISOString()
  }
}

module.exports = Email
