const {
  Model
} = require('objection');
class Phone extends Model {
  static get tableName() {
    return 'phones';
  }
}
module.exports = Phone