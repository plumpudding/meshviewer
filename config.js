define({
  "dataPath": "http://map.ffgek.de/data/",
  "siteName": "Freifunk Gelsenkirchen",
  "mapSigmaScale": 0.5,
  "showContact": false,
  "maxAge": 7,
  "nodeInfos": [
    { "name": "Statistik",
      "href": "http://map.ffgek.de/data/nodes/{NODE_ID}.png",
      "thumbnail": "http://map.ffgek.de/data/nodes/{NODE_ID}.png",
      "caption": "Knoten {NODE_ID}"
    }
  ],
  "mapLayers": [
    { "name": "MapQuest",
      "url": "https://otile{s}-s.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg",
      "config": {
        "subdomains": "1234",
        "type": "osm",
        "attribution": "Tiles &copy; <a href=\"https://www.mapquest.com/\" target=\"_blank\">MapQuest</a>, Data CC-BY-SA OpenStreetMap",
        "maxZoom": 18
      }
    }
  ],
  "globalInfos": [
    { "name": "Wochenstatistik",
      "href": "http://map.ffgek.de/data/nodes/globalGraph.png",
      "thumbnail": "http://map.ffgek.de/data/nodes/globalGraph.png",
      "caption": "Bild mit Wochenstatistik"
    }
  ]
})
