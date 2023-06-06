migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhlomwgg",
    "name": "info",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "y3kp55qnmen68ij",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // remove
  collection.schema.removeField("nhlomwgg")

  return dao.saveCollection(collection)
})
