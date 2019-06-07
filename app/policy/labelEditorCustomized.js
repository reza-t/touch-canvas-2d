flow.LabelEditor = draw2d.ui.LabelEditor.extend({
  init: function(listener) {
    this._super(listener);

    this.configuration = extend({
      onCommit: function(){},
      onCancel: function(){},
      onStart: function(){},
      text:"Value"
    },
    listener);
    
  },

  start: function(label){
    this.configuration.onStart();
    var newText = prompt(this.configuration.text, label.getText());
    if(newText){
        var cmd =new draw2d.command.CommandAttr(label, {text:newText});
        label.getCanvas().getCommandStack().execute(cmd);

        this.configuration.onCommit(label.getText());
    }
    else{
        this.configuration.onCancel();
    }
  }
})