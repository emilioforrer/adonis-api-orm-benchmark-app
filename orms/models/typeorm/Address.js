const typeorm = require("typeorm")
const Address = new typeorm.EntitySchema({
  name: "addresses",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    uuid: {
      type: "text"
    },
    contact_id: {
      type: "int"
    },
    description: {
      type: "text"
    },
    created_at: {
      type: "timestamptz"
    },
    updated_at: {
      type: "timestamptz"
    }
  },
  relations: {
    contact: {
      target: "contacts",
      type: "many-to-one",
      joinColumn: {
        name: "contact_id"
      },
      inverseSide: "addresses"
    }
  }
})
module.exports = Address