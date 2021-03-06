flow.ContextMenu = Class.extend({

  onContextMenu:function(x, y, node){
    $.contextMenu({
        selector: 'body',
        events:
        {
            hide:function(){ $.contextMenu( 'destroy' ); }
        },
        callback: function(key, options)
        {
           switch(key){
           case "delete":
               var cmd = new draw2d.command.CommandDelete(node);
               node.getCanvas().getCommandStack().execute(cmd);
           default:
               break;
           }

        }.bind(node),
        x:x,
        y:y,
        items:
        {
            "delete": {name: "Delete"}
        }
    });

  }
});