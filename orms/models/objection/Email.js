const {
  Model
} = require('objection');
class Email extends Model {
  static get tableName() {
    return 'emails';
  }
}
module.exports = Email