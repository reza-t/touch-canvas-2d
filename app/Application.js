// declare the namespace for this flow
var flow = {};

flow.Application = Class.extend({
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
