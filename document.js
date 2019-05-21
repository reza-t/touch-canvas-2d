var jsonDocument = 
[
  {
    "type": "draw2d.shape.basic.Label",
    "id": "8f7c6096-8c63-b2c0-e6aa-3d8359a6c0bd",
    "x": 0,
    "y": 0,
    "width": 57.125,
    "height": 21,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Label",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "text": "Counter: 0",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 12,
    "fontColor": "#080808",
    "fontFamily": null
  },
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "d72b7fe6-f62d-a963-d8ce-1f7a2b1a6dbb",
    "x": 92,
    "y": 89,
    "width": 80,
    "height": 80,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [
      {
        "type": "draw2d.OutputPort",
        "id": "9dfb4ebc-297f-5640-3032-ca0c935ed645",
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
    "bgColor": "#BCC4BE",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.basic.Rectangle",
    "id": "40e2a3f5-2475-875b-1f4f-fbcc16a0108d",
    "x": 416,
    "y": 104,
    "width": 80,
    "height": 80,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_basic_Rectangle",
    "ports": [
      {
        "type": "draw2d.InputPort",
        "id": "12d67f1e-fc4a-2232-231e-c8da00666352",
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
      }
    ],
    "bgColor": "#BCC4BE",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.shape.node.Between",
    "id": "438266dc-e700-2588-35fb-72db0fb41511",
    "x": 276,
    "y": 80,
    "width": 80,
    "height": 80,
    "alpha": 0.7,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_shape_node_Between",
    "ports": [
      {
        "type": "draw2d.InputPort",
        "id": "b54fd0aa-2c46-9e9e-fd3a-d951529d6b95",
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
        "id": "f69ec87d-aa69-df78-e827-b0e515dd1465",
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
    "bgColor": "#BCC4BE",
    "color": "#1B1B1B",
    "stroke": 1,
    "radius": 10,
    "dasharray": null
  },
  {
    "type": "draw2d.Connection",
    "id": "d39423d3-30c7-dcd4-f3a1-1049f5973b0e",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#00A8F0",
    "outlineStroke": 0,
    "outlineColor": "#30FF30",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 172,
        "y": 129
      },
      {
        "x": 224,
        "y": 129
      },
      {
        "x": 224,
        "y": 120
      },
      {
        "x": 276,
        "y": 120
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "d72b7fe6-f62d-a963-d8ce-1f7a2b1a6dbb",
      "port": "output0"
    },
    "target": {
      "node": "438266dc-e700-2588-35fb-72db0fb41511",
      "port": "input0"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "f6ea04f9-c8d0-19e3-c290-f59258cf08f9",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#00A8F0",
    "outlineStroke": 0,
    "outlineColor": "#30FF30",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 416,
        "y": 144
      },
      {
        "x": 386,
        "y": 144
      },
      {
        "x": 386,
        "y": 120
      },
      {
        "x": 356,
        "y": 120
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 20,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 3,
      "toDir": 1
    },
    "source": {
      "node": "40e2a3f5-2475-875b-1f4f-fbcc16a0108d",
      "port": "input0"
    },
    "target": {
      "node": "438266dc-e700-2588-35fb-72db0fb41511",
      "port": "output0"
    }
  }
]