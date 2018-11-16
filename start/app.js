'use strict'
const path = require('path')
/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  // '@adonisjs/cors/providers/CorsProvider',
  // '@adonisjs/auth/providers/AuthProvider',
  path.join(__dirname, '..', 'providers', 'SequelizeProvider'),
  path.join(__dirname, '..', 'providers', 'TypeOrmProvider'),
  path.join(__dirname, '..', 'providers', 'ObjectionProvider'),
  '@adonisjs/redis/providers/RedisProvider',
  '@adonisjs/lucid/providers/LucidProvider',

]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
