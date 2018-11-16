'use strict'

const Hash = use('Hash')
const uuidV4 = require('uuid/v4');

const CommonHook = module.exports = {}

CommonHook.generateUuid = async (model) => {
  model.uuid = await uuidV4()
}
