flow.SelectorBrick = draw2d.SetFigure.extend({

    init : function(attr)
    {
      super($.extend({ stroke: 0, bgColor: null, width: 80, height: 80 }, attr));

      const port = this.createPort('output', new draw2d.layout.locator.XYRelPortLocator(99.97395200000021, 50));
      port.setConnectionDirection();
      port.setBackgroundColor('#00FF00');
      port.setName('Port');
      port.setMaxFanOut(20);
      this.persistPorts = false;


      // BoundingBox
      let shape = this.canvas.paper.path('M0,0 L80,0 L80,80 L0,80');
      shape.attr({ stroke: 'none', 'stroke-width': 0, fill: 'none' });
      shape.data('name', 'BoundingBox');
      this.push(shape);

      // Rectangle
      shape = this.canvas.paper.path('M0,0 L80,0 L80,80 L0,80 Z');
      shape.attr({ stroke: '#303030', 'stroke-width': 2, fill: '#EEEEEE', dasharray: null, opacity: 1 });
      shape.data('name', 'Rectangle');
      this.push(shape);

      // Triangle
      shape = this.canvas.paper.path('M80,40 L0,0 L0,80 Z');
      shape.attr({ stroke: '#303030', 'stroke-width': 2, fill: '#FFFFFF', dasharray: null, opacity: 1 });
      shape.data('name', 'Triangle');
      this.push(shape);

});
