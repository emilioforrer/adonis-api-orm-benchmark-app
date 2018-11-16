const {
  Model
} = require('objection')
const Email = require('./Email')
const Phone = require('./Phone')
const Address = require('./Address')

class Contact extends Model {
  static get tableName() {
    return 'contacts';
  }

  static get relationMappings() {
    return {
      emails: {
        relation: Model.HasManyRelation,
        modelClass: Email,
        join: {
          from: 'contacts.id',
          to: 'emails.contact_id'
        }
      },
      phones: {
        relation: Model.HasManyRelation,
        modelClass: Phone,
        join: {
          from: 'contacts.id',
          to: 'phones.contact_id'
        }
      },
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: 'contacts.id',
          to: 'addresses.contact_id'
        }
      }
    };
  }
}
module.exports = Contact