'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')


Factory.blueprint('App/Models/Contact', (faker) => {
  return {
    name: faker.name()
  }
})

Factory.blueprint('App/Models/Phone', (faker) => {
  return {
    number: faker.phone()
  }
})

Factory.blueprint('App/Models/Address', (faker) => {
  return {
    description: faker.address()
  }
})

Factory.blueprint('App/Models/Email', (faker) => {
  return {
    account: faker.email()
  }
})
