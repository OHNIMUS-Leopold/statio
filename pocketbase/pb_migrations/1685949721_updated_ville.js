migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aulgspto",
    "name": "hotel",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "hnm8g21nhz1spme",
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
  collection.schema.removeField("aulgspto")

  return dao.saveCollection(collection)
})
