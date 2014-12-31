Blockly.Blocks["circle_element"] = init: ->
  @setColour 105
  @appendDummyInput().appendField "Luo pallo"
  @appendValueInput("name").setAlign(Blockly.ALIGN_RIGHT).appendField "nimi"
  @appendValueInput("radius").setAlign(Blockly.ALIGN_RIGHT).appendField "halkaisija"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["circle_element"] = (block) ->
  value_name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC)
  value_radius = Blockly.JavaScript.valueToCode(block, "radius", Blockly.JavaScript.ORDER_ATOMIC)

  # in level 1, we want our value to come from a variable, not a number
  isNumberAlready = isNaN parseInt(value_radius)
  if isNumberAlready or Exercises.currentLevel isnt 1
    code = "createBall("+value_name+","+value_radius+");\n"
  else
    #code = "notify('needs_to_be_a_variable')"
    code = ""
    modalPos = JediMaster.calculatePositionByBlock(block)
    JediMaster.pointModalWithGuidance('Halkaisija täytyy määrittää muuttujana', modalPos)
    Exercises.endExecution("nodialog")
  code

Blockly.Blocks["text_element"] = init: ->
  @setColour 105
  @appendValueInput("text").setAlign(Blockly.ALIGN_RIGHT).appendField "Piirrä teksti"
  #@appendValueInput("position").setAlign(Blockly.ALIGN_RIGHT).appendField "sijainti"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["text_element"] = (block) ->
  value_text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC)
  code = "createText("+value_text+");\n"
  code

#
Blockly.Blocks["when"] = init: ->
  @setColour 180
  @appendValueInput("event").setCheck([
    "event_click"
    "event_keydown"
  ]).setAlign(Blockly.ALIGN_RIGHT).appendField "kun"
  @appendStatementInput("when").appendField "tee"
  @setPreviousStatement true
  @setNextStatement true
  return

Blockly.JavaScript["when"] = (block) ->
  value_event = Blockly.JavaScript.valueToCode(block, "event", Blockly.JavaScript.ORDER_ATOMIC)
  statements_when = Blockly.JavaScript.statementToCode(block, "when")
  code = value_event.replace("//[STATEMENT]", statements_when)
  code

Blockly.Blocks["event_click"] = init: ->
  @setColour 210
  @appendDummyInput()
    .appendField("klikataan elementtiä")
    .appendField new Blockly.FieldDropdown(Stage.settableElementsDropdownValues), "element"
  @setOutput true
  @setTooltip ""
  return

Blockly.JavaScript["event_click"] = (block) ->
  element = block.getFieldValue("element")
  code = "onClick('"+element+"', function(){\n//[STATEMENT] });\n"
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
