var canvas = null;
document.addEventListener("DOMContentLoaded",function () {

       // Everything is loaded - core and application. Now can create the
       // application
       //

	    canvas = new draw2d.Canvas("gfx_holder");
      // create and add two nodes which contains Ports (In and OUT)
      //
      var start = new draw2d.shape.node.Start();
      var end   = new draw2d.shape.node.End();
            

      // ...add it to the canvas 
      canvas.add( start, 50,50);
      canvas.add( end, 280,55);
      
      // Create a Connection and connect the Start and End node
      //
      var c = new draw2d.Connection();
      
      // toggle from ManhattenRouter to DirectRouter to show the rotation of decorations
      c.setRouter(new draw2d.layout.connection.DirectRouter());

      // Set the endpoint decorations for the connection
      //
      c.setSourceDecorator(new draw2d.decoration.connection.ArrowDecorator());
      c.setTargetDecorator(new draw2d.decoration.connection.BarDecorator());   
      // Connect the endpoints with the start and end port
      //
      c.setSource(start.getOutputPort(1));
      c.setTarget(end.getInputPort(0));

      // and finally add the connection to the canvas
      canvas.add(c);
});

