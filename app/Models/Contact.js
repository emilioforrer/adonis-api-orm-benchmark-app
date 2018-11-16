'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Contact extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'CommonHook.generateUuid')
  }

  emails () {
    return this.hasMany('App/Models/Email')
  }

  phones() {
    return this.hasMany('App/Models/Phone')
  }

  addresses() {
    return this.hasMany('App/Models/Address')
  }
  
  static castDates(field, value) {
    return value.toISOString()
  }
}

module.exports = Contact
