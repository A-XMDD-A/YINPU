{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://iiif.io/api/cookbook/recipe/0007-string-formats/manifest.json",
  "type": "Manifest",
  "label": {
    "en": [
      "Picture of Göttingen taken during the 2019 IIIF Conference"
    ]
  },
  "summary": {
    "en": [
      "<p>Picture taken by the <a href=\"https://github.com/glenrobson\">IIIF Technical Coordinator</a></p>"
    ]
  },
  "metadata": [
    {
      "label": {
        "en": [
          "Author"
        ]
      },
      "value": {
        "none": [
          "<span><a href='https://github.com/glenrobson'>Glen Robson</a></span>"
        ]
      }
    }
  ],
  "rights": "http://creativecommons.org/licenses/by-sa/3.0/",
  "requiredStatement": {
    "label": {
      "en": [
        "Attribution"
      ]
    },
    "value": {
      "en": [
        "<span>Glen Robson, IIIF Technical Coordinator. <a href=\"https://creativecommons.org/licenses/by-sa/3.0\">CC BY-SA 3.0</a> <img src=\"https://licensebuttons.net/l/by-sa/3.0/88x31.png\"/></span>"
      ]
    }
  },
  "items": [
    {
      "id": "https://iiif.io/api/cookbook/recipe/0007-string-formats/canvas/p1",
      "type": "Canvas",
      "height": 3024,
      "width": 4032,
      "items": [
        {
          "id": "https://iiif.io/api/cookbook/recipe/0007-string-formats/page/p1/1",
          "type": "AnnotationPage",
          "items": [
            {
              "id": "https://iiif.io/api/cookbook/recipe/0007-string-formats/annotation/p0001-image",
              "type": "Annotation",
              "motivation": "painting",
              "body": {
                "id": "https://iiif.io/api/image/3.0/example/reference/918ecd18c2592080851777620de9bcb5-gottingen/full/max/0/default.jpg",
                "type": "Image",
                "format": "image/jpeg",
                "height": 3024,
                "width": 4032,
                "service": [
                  {
                    "id": "https://iiif.io/api/image/3.0/example/reference/918ecd18c2592080851777620de9bcb5-gottingen",
                    "profile": "level1",
                    "type": "ImageService3"
                  }
                ]
              },
              "target": "https://iiif.io/api/cookbook/recipe/0007-string-formats/canvas/p1"
            }
          ]
        }
      ]
    }
  ]
}
