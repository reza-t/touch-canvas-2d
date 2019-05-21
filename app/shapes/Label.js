flow.Label = Class.extend({
  init: function(shape){
    var label =  new draw2d.shape.basic.Label({text:"Unknown"});

    label.installEditor(new draw2d.ui.LabelInplaceEditor({
      // called after the value has been set to the LabelFigure
      onCommit: $.proxy(function(value){
          // alert("new value set to:"+value);
      },this),
      // called if the user abort the operation
      onCancel: function(){
      }
    }));
    shape.add(label, new draw2d.layout.locator.TopLocator());
  }
});





