
StartBrick = draw2d.shape.basic.Rectangle.extend({

  init : function(attr)
  {
    this._super($.extend(
      {
        bgColor:"#00a3f6",
        color:"#1B1B1B",
        alpha  : 0.7,
        width: 100,
        height: 60,
        radius: 10
      },attr));

      this.createPort("output");

      flow.myPolicy.shapeFeedback(this);

      this.add(new draw2d.shape.basic.Label({text:"Start"}), new draw2d.layout.locator.CenterLocator());
  }
});