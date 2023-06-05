migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kd1wkudf",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kd1wkudf",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
