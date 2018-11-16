const Phone = function (sequelize, Sequelize) {
  return sequelize.define('phone', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    uuid: {
      type: Sequelize.STRING
    },
    contact_id: {
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    }
  }, {
    TableName: 'phones',
    underscored: true
  })
}

module.exports = Phone