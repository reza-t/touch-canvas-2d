var MyOutputPort = draw2d.OutputPort.extend({
  
  init: function(attr, setter, getter) {
    this._super(attr, setter, getter);

    this.getCssClass();
    this.addCssClass('port');
    this.setRadius('10');

  }
});