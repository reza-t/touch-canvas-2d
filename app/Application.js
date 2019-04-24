// declare the namespace for this flow
var flow = {};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
flow.Application = Class.extend(
{
    NAME : "flow.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
	      this.view    = new flow.View("canvas");
          this.toolbar = new flow.Toolbar("toolbar",  this.view );
	}


});
