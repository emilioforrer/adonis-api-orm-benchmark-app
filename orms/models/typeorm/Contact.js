const typeorm = require("typeorm")
const Contact = new typeorm.EntitySchema({
  name: "contacts",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    uuid: {
      type: "text"
    },
    name: {
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
    emails: {
      target: "emails",
      type: "one-to-many",
      joinColumn: true,
      inverseSide: "contact"
    },
    phones: {
      target: "phones",
      type: "one-to-many",
      joinColumn: true,
      inverseSide: "contact"
    },
    addresses: {
      target: "addresses",
      type: "one-to-many",
      joinColumn: true,
      inverseSide: "contact"
    },

  }
})
module.exports = Contact