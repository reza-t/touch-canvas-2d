var Label = draw2d.shape.basic.Label.extend({
  init: function(shape) {
    this._super($.extend({ text: "Unknown" }, shape));

    this.installEditor(
      new flow.LabelEditor({
        // called after the value has been set to the LabelFigure
        onCommit: $.proxy(function(value) {
          // alert("new value set to:"+value);
        }, this),
        // called if the user abort the operation
        onCancel: function() {}
      })
    );

    shape.add(this, new draw2d.layout.locator.TopLocator());
    shape.installEditPolicy(new SelectionMenuPolicy());

  },
});
