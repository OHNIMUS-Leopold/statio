migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  collection.name = "ville"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx9vxnnlaxnxyrs")

  collection.name = "pays"

  return dao.saveCollection(collection)
})
