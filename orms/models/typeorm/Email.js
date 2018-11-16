const typeorm = require("typeorm")
const Email = new typeorm.EntitySchema({
  name: "emails",
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
    account: {
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
      inverseSide: "emails"
    }
  }
})
module.exports = Email