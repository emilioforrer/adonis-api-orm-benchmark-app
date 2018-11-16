const Contact = function (sequelize, Sequelize) {
  return sequelize.define('contact', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    uuid: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    }
  }, {
    TableName: 'contacts',
    underscored: true
  })
}
module.exports = Contact