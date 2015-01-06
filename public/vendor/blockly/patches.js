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
//
Blockly.BlockSvg.afterConnectionMouseUp = function() { };
Blockly.BlockSvg.prototype.onMouseUp_ = function(e) {
  var this_ = this;
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
