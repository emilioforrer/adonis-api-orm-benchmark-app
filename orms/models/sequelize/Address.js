const Address = function (sequelize, Sequelize) {
  return sequelize.define('address', {
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
    description: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    }
  }, {
    TableName: 'addresses',
    underscored: true
  })
}
module.exports = Address