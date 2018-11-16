'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')
const Memcached = require('memcached');
var memcached = new Memcached('localhost:11212', {
  maxValue: 9048576
});

Route.get('/api/v1/contacts', async () => {
  const Redis = use('Redis')
  const Contact = use('App/Models/Contact')
  
  const cachedContacts = await Redis.get('adonis.v1.contacts')
  if (cachedContacts) {
    return JSON.parse(cachedContacts)
  }

  const contacts = await Contact
    .query()
    .with('emails')
    .with('phones')
    .with('addresses')
    .fetch()
  await Redis.set('adonis.v1.contacts', JSON.stringify(contacts))
  return contacts
})


Route.get('/api/v2/contacts', async () => {
  const Redis = use('Redis')
  const Contact = use('Contact')
  const cachedContacts = await Redis.get('adonis.v2.contacts')
  if (cachedContacts) {
    return JSON.parse(cachedContacts)
  }
  const contacts = await Contact.query()
    .eager('[emails, phones, addresses]')
  await Redis.set('adonis.v2.contacts', JSON.stringify(contacts))
  return contacts
})


Route.get('/api/v3/contacts', async () => {
  const Contact = use('App/Models/Contact')
  

  let cachedContacts = undefined
  memcached.get('foo', function (err, data) {
    console.log('oli')
    cachedContacts = data
    console.log(err)
  });
  if (cachedContacts) {
    console.log('oli')
    return JSON.parse(cachedContacts)
  }

  const contacts = await Contact
    .query()
    .with('emails')
    .with('phones')
    .with('addresses')
    .fetch()
  memcached.set('foo', JSON.stringify(contacts), 3600, function (err) { 
    console.log(err)
  });
  return contacts
})


Route.get('/api/v1/lucid/contacts', async () => {
  const Contact = use('App/Models/Contact')
  const contacts = await Contact
    .query()
    .with('emails')
    .with('phones')
    .with('addresses')
    .fetch()
  return contacts
})

Route.get('/api/v1/objection/contacts', async () => {
  const Contact = use('Objection/Contact')
  const contacts = await Contact.query()
    .eager('[emails, phones, addresses]')
  return contacts
})

Route.get('/api/v1/typeorm/contacts', async () => {
  const Contact = use('Typeorm/Contact')
  const contacts = await Contact.find({
    relations: ['emails', 'phones', 'addresses']
  })
  return contacts
})


Route.get('/api/v1/sequelize/contacts', async () => {
  const Contact = use('Sequelize/Contact')
  const contacts = await Contact.findAll({
    include: ['emails', 'phones', 'addresses']
  })
  return contacts
})