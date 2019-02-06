module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "timestamp",
    "data"
  ],
  "properties": {
    "timestamp": {
      "$id": "#/properties/timestamp",
      "type": "integer",
      "title": "The Timestamp Schema",
      "default": 0,
      "examples": [
        1493758596
      ]
    },
    "data": {
      "$id": "#/properties/data",
      "type": "array",
      "title": "The Data Schema",
      "items": {
        "$id": "#/properties/data/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "title",
          "values"
        ],
        "properties": {
          "title": {
            "$id": "#/properties/data/items/properties/title",
            "type": "string",
            "title": "The Title Schema",
            "default": "",
            "examples": [
              "Part 1"
            ],
            "pattern": "^(.*)$"
          },
          "values": {
            "$id": "#/properties/data/items/properties/values",
            "type": "array",
            "title": "The Values Schema",
            "items": {
              "$id": "#/properties/data/items/properties/values/items",
              "type": "integer",
              "title": "The Items Schema",
              "default": 0,
              "examples": [
                345560,
                3,
                5,
                6,
                2,
                9
              ]
            }
          }
        }
      }
    }
  }
};