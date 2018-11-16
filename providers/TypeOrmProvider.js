'use strict'
require('reflect-metadata')

const {
  ServiceProvider
} = require('@adonisjs/fold')

class TypeOrmProvider extends ServiceProvider {
  knexConfig() {
    const Config = this.app.use('Adonis/Src/Config')
    const connection = Config.get('database.connection')
    const config = Config.get('database.' + connection)
    return config
  }
  async register() {
    const knexConfig = this.knexConfig()
    const typeorm = require("typeorm")
    const createConnection = typeorm.createConnection
    const Address = require('../orms/models/typeorm/Address')
    const Contact = require('../orms/models/typeorm/Contact')
    const Email = require('../orms/models/typeorm/Email')
    const Phone = require('../orms/models/typeorm/Phone')
    const typeConn = await createConnection({
      type: "postgres",
      host: knexConfig.connection.host,
      username: knexConfig.connection.user,
      password: knexConfig.connection.password,
      database: knexConfig.connection.database,
      port: knexConfig.connection.port,
      extra: {
        pool: {
          max: knexConfig.pool.max,
          min: 0
        }
      },
      entities: [
        Address,
        Contact,
        Email,
        Phone
      ]
    })

    this.app.singleton('typeConn', () => {
      return typeConn
    })

    this.app.singleton('Typeorm/Contact', () => {
      return typeConn.getRepository(Contact)
    })

  }

}

module.exports = TypeOrmProvider