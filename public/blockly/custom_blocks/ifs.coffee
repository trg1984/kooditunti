Blockly.Blocks["heading"] = init: ->
  @setColour 290
  @appendDummyInput()
    .appendField("suunta")
    .appendField new Blockly.FieldAngle("90"), "ANGLE"
  @setPreviousStatement true
  return

Blockly.JavaScript["heading"] = (block) ->
  # Generate JavaScript for moving bird in a direction.
  dir = parseFloat(block.getFieldValue("ANGLE"))
  "heading(" + dir + ", 'block_id_" + block.id + "');\n"

