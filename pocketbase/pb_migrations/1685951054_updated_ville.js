migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxfyrllm",
    "name": "activite",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7epb1zz7gpmwidz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kheq8htn",
    "name": "transport",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aq9uc1epmf50bg8",
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

  // update
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxfyrllm",
    "name": "activite",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7epb1zz7gpmwidz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kheq8htn",
    "name": "transport",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aq9uc1epmf50bg8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
