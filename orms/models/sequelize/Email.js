const Email = function (sequelize, Sequelize) {
  return sequelize.define('email', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    contact_id: {
      type: Sequelize.INTEGER,
    },
    uuid: {
      type: Sequelize.STRING
    },
    account: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    }
  }, {
    TableName: 'emails',
    underscored: true
  })
}
module.exports = Email