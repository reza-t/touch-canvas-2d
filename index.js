var canvas = null;
document.addEventListener("DOMContentLoaded",function () {

       // Everything is loaded - core and application. Now can create the
       // application
       //

	    canvas = new draw2d.Canvas("gfx_holder");
      var figure = new draw2d.shape.flowchart.Document({
        x:100,
        y:82
      });      
      
      canvas.add(figure);
});
