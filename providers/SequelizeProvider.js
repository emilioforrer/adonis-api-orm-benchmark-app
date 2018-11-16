'use strict'
const {
  ServiceProvider
} = require('@adonisjs/fold')

class SequelizeProvider extends ServiceProvider {
  knexConfig() {
    const Config = this.app.use('Adonis/Src/Config')
    const connection = Config.get('database.connection')
    const config = Config.get('database.' + connection)
    return config
  }
  async register() {
    const knexConfig = this.knexConfig()
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(knexConfig.connection.database, knexConfig.connection.user, knexConfig.connection.password, {
      host: knexConfig.connection.host,
      dialect: 'postgres',

      pool: {
        max: knexConfig.pool.max,
        min: 0
      },

      // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
      operatorsAliases: false
    });

    const Contact = require('../orms/models/sequelize/Contact')(sequelize, Sequelize)

    const Phone = require('../orms/models/sequelize/Phone')(sequelize, Sequelize)

    const Address = require('../orms/models/sequelize/Address')(sequelize, Sequelize)

    const Email = require('../orms/models/sequelize/Email')(sequelize, Sequelize)

    Contact.hasMany(Email, {
      as: 'emails',
      foreignKey: 'contact_id',
      sourceKey: 'id'
    })

    Contact.hasMany(Phone, {
      as: 'phones',
      foreignKey: 'contact_id',
      sourceKey: 'id'
    })

    Contact.hasMany(Address, {
      as: 'addresses',
      foreignKey: 'contact_id',
      sourceKey: 'id'
    })


    this.app.singleton('Sequelize/Contact', () => {
      return Contact
    })

  }

}

module.exports = SequelizeProvider