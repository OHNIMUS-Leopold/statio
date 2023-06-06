migrate((db) => {
  const collection = new Collection({
    "id": "y3kp55qnmen68ij",
    "created": "2023-06-06 20:21:19.523Z",
    "updated": "2023-06-06 20:21:19.523Z",
    "name": "info",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yclhxcvc",
        "name": "p1_titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "soi3m49r",
        "name": "p1_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vbuiswaa",
        "name": "p2_titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tqvcr1jg",
        "name": "p2_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jceh7fcf",
        "name": "p3_titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "usj5rgph",
        "name": "p3_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y3kp55qnmen68ij");

  return dao.deleteCollection(collection);
})
