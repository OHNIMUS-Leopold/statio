migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "er1vphcg",
    "name": "preview",
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

  // remove
  collection.schema.removeField("er1vphcg")

  return dao.saveCollection(collection)
})
