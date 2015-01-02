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
