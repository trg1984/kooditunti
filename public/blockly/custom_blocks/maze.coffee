Blockly.Blocks["move_left"] = init: ->
  @setColour 345
  @appendDummyInput().appendField "Liiku vasemmalle"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_left"] = (block) ->
  code = "moveLeft();"
  return code

Blockly.Blocks["move_right"] = init: ->
  @setColour 345
  @appendDummyInput().appendField "Liiku oikealle"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_right"] = (block) ->
  code = "moveRight();"
  return code


Blockly.Blocks["move_up"] = init: ->
  @setColour 345
  @appendDummyInput().appendField "Liiku ylös"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_up"] = (block) ->
  code = "moveUp();"
  return code

Blockly.Blocks["move_down"] = init: ->
  @setColour 345
  @appendDummyInput().appendField "Liiku alas"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_down"] = (block) ->
  code = "moveDown();"
  return code
