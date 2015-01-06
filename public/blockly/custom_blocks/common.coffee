Blockly.Blocks["prompt"] = init: ->
  @setColour 280
  @appendValueInput("text").appendField "kysy"
  @setOutput true

Blockly.JavaScript["prompt"] = (block) ->
  value_text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC)
  return ["prompt("+value_text+")",Blockly.JavaScript.ORDER_ATOMIC]

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
