Blockly.Blocks["move_left"] = init: ->
  @setColour 60
  @appendDummyInput().appendField "Liiku vasemmalle"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_left"] = (block) ->
  code = "moveLeft();\n"
  return code

Blockly.Blocks["move_right"] = init: ->
  @setColour 60
  @appendDummyInput().appendField "Liiku oikealle"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_right"] = (block) ->
  code = "moveRight();\n"
  return code


Blockly.Blocks["move_up"] = init: ->
  @setColour 60
  @appendDummyInput().appendField "Liiku ylös"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_up"] = (block) ->
  code = "moveUp();\n"
  return code

Blockly.Blocks["move_down"] = init: ->
  @setColour 60
  @appendDummyInput().appendField "Liiku alas"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["move_down"] = (block) ->
  code = "moveDown();\n"
  return code

Blockly.Blocks["in_special_location"] = init: ->
  @setColour 290
  @appendDummyInput()
    .appendField("pallo on punaisessa ruudussa")
  @setOutput true
  return

Blockly.JavaScript["in_special_location"] = (block) ->
  #["",Blockly.JavaScript.ORDER_ATOMIC]
  ["inSpecialLocation()",Blockly.JavaScript.ORDER_ATOMIC]
