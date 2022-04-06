var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10566968711430746,
          "pitch": -0.21424552670892538,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7930506291735284,
          "pitch": 0.2049739067926808,
          "title": "Welcome!",
          "text": "Welcome to the Faculty of engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23913940155035895,
        "pitch": -0.052650558460239694,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.10267617947031127,
          "pitch": -0.03868853724856258,
          "rotation": 6.283185307179586,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7193974636576268,
          "pitch": -0.13656517679764768,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6375571934345512,
          "pitch": 0.07793321001703646,
          "title": "Onward!",
          "text": "Head on over to the auditorium!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.235156086026759,
        "pitch": 0.12130664361292887,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.107391032238475,
          "pitch": -0.004343867532945467,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8437085241302213,
          "pitch": 0.19012856324379612,
          "title": "Mmmm...",
          "text": "Can you smell the coffee?"
        }
      ]
    }
  ],
  "name": "My Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
