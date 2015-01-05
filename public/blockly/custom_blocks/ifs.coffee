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

Blockly.Blocks["when_clicked"] = init: ->
  @setColour 180
  @appendDummyInput("event")
    .appendField "kun klikataan elementtiä"
    .appendField new Blockly.FieldDropdown(Stage.settableElementsDropdownValues), "element"
  @appendStatementInput("when").appendField "tee"
  @setPreviousStatement true
  @setNextStatement true
  return

Blockly.JavaScript["when_clicked"] = (block) ->
  #value_event = Blockly.JavaScript.valueToCode(block, "event", Blockly.JavaScript.ORDER_ATOMIC)
  element = block.getFieldValue("element")
  statements_when = Blockly.JavaScript.statementToCode(block, "when")
  code = "onClick('"+element+"', function(){\n//[STATEMENT] });\n"
  code = code.replace("//[STATEMENT]", statements_when)
  code

