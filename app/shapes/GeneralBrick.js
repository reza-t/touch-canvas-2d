
GeneralBrick = draw2d.shape.basic.Rectangle.extend({

  init : function(attr)
  {
    this._super($.extend(
      {
        bgColor:"#bcc4be",
        color:"#1B1B1B",
        alpha  : 0.7,
        width: 80,
        height: 80,
        radius: 10
      },attr));

      this.createPort("input");
      this.createPort("output");
      flow.myPolicy.shapeFeedback(this);
      this.label = new flow.Label(this);

  }

});