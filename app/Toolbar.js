flow.Toolbar = Class.extend({
  init: function(elementId, app, view) {
    this.html = $("#" + elementId);
    this.view = view;
    this.app = app;
    // Add the timer label to canvas
    var timerFigure = new TimerFigure({ x: 0, y: 0 });
    this.view.add(timerFigure);

    // Export the json 
    // view.getCommandStack().addEventListener(function(e) {
    //   if (e.isPostChangeEvent()) {
    //     var writer = new draw2d.io.json.Writer();
    //     writer.marshal(view, function(json) {
    //       $("#json").text(JSON.stringify(json, null, 2));
    //     });
    //   }
    // });

    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    view.getCommandStack().addEventListener(this);

    // Register a Selection listener for the state handling
    // of the Delete Button
    //
    view.on("select", $.proxy(this.onSelectionChanged, this));

    this.editGroup  = $("<div class='btn-group btnGroup' role='group' aria-label='Basic example'>");
		this.html.append(this.editGroup);
    // Inject the UNDO Button and the callbacks
    //
    this.undoButton = $("<button class='gray'>Undo</button>");
    this.editGroup.append(this.undoButton);
    this.undoButton.click(
      $.proxy(function() {
        this.view.getCommandStack().undo();
      }, this)
    );

    // Inject the REDO Button and the callback
    //
    this.redoButton = $("<button class='gray'>Redo</button>");
    this.editGroup.append(this.redoButton);
    this.redoButton.click(
      $.proxy(function() {
        this.view.getCommandStack().redo();
      }, this)
    );

    this.delimiter = $("<span class='toolbar_delimiter'>&nbsp;</span>");
    this.editGroup.append(this.delimiter);

    // Inject the DELETE Button
    //
    this.deleteButton = $("<button class='gray'>Delete</button>");
    this.editGroup.append(this.deleteButton);
    this.deleteButton.click(
      $.proxy(function() {
        var node = this.view.getPrimarySelection();
        var command = new draw2d.command.CommandDelete(node);
        this.view.getCommandStack().execute(command);
      }, this)
    );

    this.disableButton(this.undoButton, true);
    this.disableButton(this.redoButton, true);
    this.disableButton(this.deleteButton, true);

    this.groupButtons  = $("<div class='btn-group btnGroup' role='group' aria-label='Basic example'>");
		this.html.append(this.groupButtons);
    // Inject the GROUP Button and the callbacks
    //
    this.groupButton = $('<button class="btn btn-primary" >Group</button>');
    this.groupButtons.append(this.groupButton);
    this.groupButton.click(
      $.proxy(function() {
        var command = new draw2d.command.CommandGroup(
          this.view,
          this.view.getSelection()
        );
        this.view.getCommandStack().execute(command);
      }, this)
    );

    // // Inject the UNGROUP Button and the callbacks
    // //
    this.groupButton = $('<button class="btn btn-danger" >Un group</button>');
    this.groupButtons.append(this.groupButton);
    this.groupButton.click(
      $.proxy(function() {
        var command = new draw2d.command.CommandUngroup(
          this.view,
          this.view.getSelection()
        );
        this.view.getCommandStack().execute(command);
      }, this)
    );
      
    this.zoomGroup  = $("<div class='btn-group btnGroup' role='group' aria-label='Basic example'>");
		this.html.append(this.zoomGroup);

		// Inject the Zoom in Button and the callbacks
		//
		this.zoomInButton  = $("<button type='button' class='btn btn-default'>Zoom In</button>");
		this.zoomGroup.append(this.zoomInButton);
		this.zoomInButton.button().click($.proxy(function(){
		      this.view.setZoom(this.view.getZoom()*0.7,true);
		      // this.app.layout();
		},this));

		// Inject the 1:1 Button
		//
		this.resetButton  = $("<button type='button' class='btn btn-primary'>1:1</button>");
		this.zoomGroup.append(this.resetButton);
		this.resetButton.button().click($.proxy(function(){
		    this.view.setZoom(1.0, true);
            // this.app.layout();
		},this));
		
		// Inject the Zoom out Button and the callback
		//
		this.zoomOutButton  = $("<button type='button' class='btn btn-default'>Zoom Out</button>");
		this.zoomGroup.append(this.zoomOutButton);
		this.zoomOutButton.button().click($.proxy(function(){
            this.view.setZoom(this.view.getZoom()*1.3, true);
            // this.app.layout();
    },this));

    
    this.timerGroup  = $("<div class='btn-group btnGroup' role='group' aria-label='Basic example'>");
		this.html.append(this.timerGroup);

    // Start Timer button
    this.startTimer = $("<button class='btn btn-primary'>START TIMER</button>");
    this.timerGroup.append(this.startTimer);
    this.startTimer.click(
      $.proxy(function() {
        timerFigure.startTimer(1000);
        isTimerStart = true;
      }, this)
    );

    // Stop Timer button
    this.stopTimer = $("<button class='btn btn-danger'>STOP TIMER</button>");
    this.timerGroup.append(this.stopTimer);
    this.stopTimer.click(
      $.proxy(function() {
        timerFigure.stopTimer();
        isTimerStart = false;
      }, this)
    );

    this.touchCounter = $(
      "<p style='color:white; margin-right:25px; float:right;'>The number of fingers touching this document is currently <span id='touchCounter'>0</span>.</p>"
    );
    this.html.append(this.touchCounter);
  },

  /**
   * @method
   * Called if the selection in the canvas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Canvas} emitter
   * @param {Object} event
   * @param {draw2d.Figure} event.figure
   */
  onSelectionChanged: function(emitter, event) {
    this.disableButton(this.deleteButton, event.figure === null);
  },

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged: function(event) {
    this.disableButton(this.undoButton, !event.getStack().canUndo());
    this.disableButton(this.redoButton, !event.getStack().canRedo());
  },

  disableButton: function(button, flag) {
    button.prop("disabled", flag);
    if (flag) {
      button.addClass("disabled");
    } else {
      button.removeClass("disabled");
    }
  }
});
