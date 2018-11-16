const typeorm = require("typeorm")
const Phone = new typeorm.EntitySchema({
  name: "phones",
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
    number: {
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
      inverseSide: "phones"
    }
  }
})

module.exports = Phone