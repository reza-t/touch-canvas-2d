
var TimerFigure = draw2d.shape.basic.Label.extend({

    init : function(attr)
    {
    	this.counter = 0;
    	this._super($.extend({text:"Counter: 0"},attr ));
    },

    /**
     * @method
     * private callback method for the internal timer.
     * 
     * @private
     */
    onTimer:function(){
        this.setText("Timer: "+(++this.counter));
    }
});
