'use strict'

/*
|--------------------------------------------------------------------------
| ContactSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Logger = use('Logger')


class ContactSeeder {
  async run () {
    for (var i of Array(1000).fill()) {
      let contact = await Factory
      .model('App/Models/Contact')
      .create()
      for (var value of Array(2).fill()) {
        let phone = await Factory
        .model('App/Models/Phone')
        .create()
        await contact.phones().save(phone)
      }

      for (var value of Array(2).fill()) {
        let address = await Factory
        .model('App/Models/Address')
        .create()
        await contact.addresses().save(address)
      }

      for (var value of Array(2).fill()) {
        let email = await Factory
        .model('App/Models/Email')
        .create()
        await contact.emails().save(email)
      }
      // Logger.info(contact.id);
    }
  }
}

module.exports = ContactSeeder
