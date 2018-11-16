const {
  Model
} = require('objection');
class Address extends Model {
  static get tableName() {
    return 'addresses';
  }
}
module.exports = Address