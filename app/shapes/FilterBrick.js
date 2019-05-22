
flow.FilterBrick = draw2d.shape.basic.Polygon.extend({

  init : function(attr)
  {
      this._super($.extend({bgColor:"#bcc4be",color:"#1B1B1B"},attr));
      
      this.resetVertices();
      
      var box = this.getBoundingBox();
      
      this.addVertex(0, 0);     // Go to the top center..
      this.addVertex(box.w*2, box.w/2); // ...draw line to the right bottom
      this.addVertex(0, box.w);     // Go to the top center..

      // it is not necessary to close the path. A Polygon is always closed by definition.
      // (Use a Polyline if you need an open path)
      //        this.addVertex(box.w/2 , 0);     // and close the path
      
      
      // override the selection handler from the polygon. Because the vertices of 
      // the triangle are not selectable and modifiable
      //
      this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
      this.createPort("output");
      this.createPort("input");
      this.createPort("input");

      this.setPosition(box.getTopLeft());
      
      flow.myPolicy.shapeFeedback(this);
      this.label = new flow.Label(this);

  },

  onContextMenu:function(x,y){
    var menu = new flow.ContextMenu();
    menu.onContextMenu(x, y, this);
  },

  onDrop:function(dropTarget, x, y, shiftKey, ctrlKey)
  {
    console.warn("onDrop")
    // Activate a "smart insert" If the user drop this figure on connection
    //
    if(dropTarget instanceof draw2d.Connection){
      let oldSource = dropTarget.getSource();
      let oldTarget = dropTarget.getTarget();

      let stack = this.getCanvas().getCommandStack();

      let cmd = new draw2d.command.CommandReconnect(dropTarget);
      cmd.setNewPorts(oldSource, this.getInputPort(0));
      stack.execute(cmd);

      let additionalConnection = createConnection();
      cmd = new draw2d.command.CommandConnect(oldTarget,this.getOutputPort(0));
      cmd.setConnection(additionalConnection);
      stack.execute(cmd);

    }
  }
  

});
