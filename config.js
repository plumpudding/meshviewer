define({
  "dataPath": "http://map.gl.wupper.freifunk-rheinland.net/data/",
  "siteName": "Freifunk gl.wupper",
  "mapSigmaScale": 0.5,
  "showContact": true,
  "maxAge": 7,
  "nodeInfos": [
    { "name": "Statistik",
      "href": "http://map.gl.wupper.freifunk-rheinland.net/data/nodes/{NODE_ID}.png",
      "thumbnail": "http://map.gl.wupper.freifunk-rheinland.net/data/nodes/{NODE_ID}.png",
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
      "href": "http://map.gl.wupper.freifunk-rheinland.net/data/nodes/globalGraph.png",
      "thumbnail": "http://map.gl.wupper.freifunk-rheinland.net/data/nodes/globalGraph.png",
      "caption": "Bild mit Wochenstatistik"
    }
  ]
})