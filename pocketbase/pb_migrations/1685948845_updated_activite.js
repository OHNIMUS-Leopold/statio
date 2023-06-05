migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7epb1zz7gpmwidz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6mh4kcq",
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
  const collection = dao.findCollectionByNameOrId("7epb1zz7gpmwidz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6mh4kcq",
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
