// Monkeypatches for Blockly
//
// Change trashcan position
//
Blockly.Trashcan.prototype.MARGIN_SIDE_ = 20;
Blockly.Trashcan.prototype.MARGIN_BOTTOM_ = 45;
Blockly.Trashcan.prototype.position_ = function() {
  var metrics = this.workspace_.getMetrics();
  if (!metrics) {
    // There are no metrics available (workspace is probably not visible).
    return;
  }
  // display trash on right side
  this.left_ = this.MARGIN_SIDE_;
  this.top_ = metrics.viewHeight + metrics.absoluteTop -
      (this.BODY_HEIGHT_ + this.LID_HEIGHT_) - this.MARGIN_BOTTOM_;
  this.svgGroup_.setAttribute('transform',
      'translate(' + this.left_ + ',' + this.top_ + ')');
};

// Create a callback event for connecting blocks
// Create a double click collapse event
//
/* PATCH START */
Blockly.BlockSvg.afterConnectionMouseUp = function() { };
Blockly.BlockSvg.doubleClickCallback = function() { };
/* PATCH END */
Blockly.BlockSvg.prototype.onMouseUp_ = function(e) {
  var this_ = this;
  /* PATCH START */
  if(!this.isInFlyout && !Blockly.isRightButton(e) && this.outputConnection == null){
    if(window.blocklyBlockSecondClick){
      this.setCollapsed(!this.collapsed_);
      Blockly.BlockSvg.doubleClickCallback(this);
    }
    window.blocklyBlockSecondClick = true;
    setTimeout(function(){ window.blocklyBlockSecondClick = false; },300);
  }
  /* PATCH END */
  Blockly.doCommand(function() {
    Blockly.terminateDrag_();
    if (Blockly.selected && Blockly.highlightedConnection_) {
      // Connect two blocks together.
      Blockly.localConnection_.connect(Blockly.highlightedConnection_);
      if (this_.rendered) {
        // Trigger a connection animation.
        // Determine which connection is inferior (lower in the source stack).
        var inferiorConnection;
        if (Blockly.localConnection_.isSuperior()) {
          inferiorConnection = Blockly.highlightedConnection_;
        } else {
          inferiorConnection = Blockly.localConnection_;
        }
        inferiorConnection.sourceBlock_.connectionUiEffect();
      }
      if (this_.workspace.trashcan) {
        // Don't throw an object in the trash can if it just got connected.
        this_.workspace.trashcan.close();
      }
      // PATCH START
      Blockly.BlockSvg.afterConnectionMouseUp(inferiorConnection)
      // PATCH END
    } else if (this_.workspace.isDeleteArea(e)) {
      var trashcan = this_.workspace.trashcan;
      if (trashcan) {
        goog.Timer.callOnce(trashcan.close, 100, trashcan);
      }
      Blockly.selected.dispose(false, true);
      // Dropping a block on the trash can will usually cause the workspace to
      // resize to contain the newly positioned block.  Force a second resize
      // now that the block has been deleted.
      Blockly.fireUiEvent(window, 'resize');
    }
    if (Blockly.highlightedConnection_) {
      Blockly.highlightedConnection_.unhighlight();
      Blockly.highlightedConnection_ = null;
    }
    Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN);
  });
};

// Invalidate waiting for second click on input click
// Related to previous
Blockly.Field.prototype.onMouseUp_ = function(e) {
  // PATCH START
  setTimeout(function(){ window.blocklyBlockSecondClick = false; },0);
  // PATCH END
  if ((goog.userAgent.IPHONE || goog.userAgent.IPAD) &&
      e.layerX !== 0 && e.layerY !== 0) {
    // iOS spawns a bogus event on the next touch after a 'prompt()' edit.
    // Unlike the real events, these have a layerX and layerY set.
    return;
  } else if (Blockly.isRightButton(e)) {
    // Right-click.
    return;
  } else if (Blockly.dragMode_ == 2) {
    // Drag operation is concluding.  Don't open the editor.
    return;
  } else if (this.sourceBlock_.isEditable()) {
    // Non-abstract sub-classes must define a showEditor_ method.
    this.showEditor_();
  }
};


// Create callback event for mutator icon click
//
Blockly.Mutator.afterClick = function() { };
Blockly.Mutator.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable()) {
    Blockly.Icon.prototype.iconClick_.call(this, e);
    // PATCH START
    Blockly.Mutator.afterClick()
    // PATCH END
  }
};
