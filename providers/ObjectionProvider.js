'use strict'
const {
  ServiceProvider
} = require('@adonisjs/fold')
const {
  Model
} = require('objection');
const Knex = require('knex')

class ObjectionProvider extends ServiceProvider {
  knexConfig() {
    const Config = this.app.use('Adonis/Src/Config')
    const connection = Config.get('database.connection')
    const config = Config.get('database.' + connection)
    return config
  }
  async register() {
    const knexConfig = this.knexConfig()
    const knex = Knex(knexConfig)
    Model.knex(knex)
    const Contact = require('../orms/models/objection/Contact')
    this.app.singleton('Objection/Contact', () => {
      return Contact
    })

  }

}

module.exports = ObjectionProvider