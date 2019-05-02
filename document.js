var jsonDocument = 
[
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "5025b439-9076-1aad-4d12-24eb8616454e",
    "x": 71,
    "y": 76,
    "width": 100,
    "height": 60,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "080cbae3-b7c9-6c62-c667-7bb809b37736",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "output0",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.OutputPortLocator"
      }
    ],
    "bgColor": "#00A3F6",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "76ec0fb2-15e2-03a8-1986-6424d99d2c24",
    "x": 690,
    "y": 68,
    "width": 100,
    "height": 60,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [
      {
        "type": "draw2d.InputPort",
        "id": "ed38ce49-b09f-480f-536b-11fca2ae1173",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_InputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "input0",
        "port": "draw2d.InputPort",
        "locator": "draw2d.layout.locator.InputPortLocator"
      },
      {
        "type": "draw2d.OutputPort",
        "id": "0e00ff92-fcfa-c41a-677f-0e31c1ee538c",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "output0",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.OutputPortLocator"
      }
    ],
    "bgColor": "#00A3F6",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "37e86422-8d9c-92b0-a227-1116e2e6b662",
    "x": 394,
    "y": 102,
    "width": 100,
    "height": 60,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [
      {
        "type": "draw2d.InputPort",
        "id": "e242a5b3-b6e7-3ab0-046f-7a12056071ca",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_InputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 1,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "input0",
        "port": "draw2d.InputPort",
        "locator": "draw2d.layout.locator.InputPortLocator"
      },
      {
        "type": "draw2d.OutputPort",
        "id": "8e3bf5a3-7d45-4295-3d77-5e549cfbf022",
        "width": 10,
        "height": 10,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_OutputPort",
        "bgColor": "#4F6870",
        "color": "#1B1B1B",
        "stroke": 2,
        "dasharray": null,
        "maxFanOut": 9007199254740991,
        "name": "output0",
        "port": "draw2d.OutputPort",
        "locator": "draw2d.layout.locator.OutputPortLocator"
      }
    ],
    "bgColor": "#00A3F6",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.Connection",
    "id": "a5e09db1-c6a7-6d21-0893-7d9698068b1c",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 3,
    "color": "#91B93E",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 171,
        "y": 106
      },
      {
        "x": 282.5,
        "y": 106
      },
      {
        "x": 282.5,
        "y": 132
      },
      {
        "x": 394,
        "y": 132
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 3,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "5025b439-9076-1aad-4d12-24eb8616454e",
      "port": "output0"
    },
    "target": {
      "node": "37e86422-8d9c-92b0-a227-1116e2e6b662",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "43e83409-a664-25f9-769b-3cee948de610",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 3,
    "color": "#91B93E",
    "outlineStroke": 1,
    "outlineColor": "#303030",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 494,
        "y": 132
      },
      {
        "x": 592,
        "y": 132
      },
      {
        "x": 592,
        "y": 98
      },
      {
        "x": 690,
        "y": 98
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 3,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "37e86422-8d9c-92b0-a227-1116e2e6b662",
      "port": "output0"
    },
    "target": {
      "node": "76ec0fb2-15e2-03a8-1986-6424d99d2c24",
      "port": "input0"
    }
  }
];