@CodeArea =
  settableElements: []
  getSettableElements: ->
    blocks = window.Blockly.mainWorkspace.getAllBlocks()
    CodeArea.settableElements = []
    $.each blocks, ->
      if $.inArray(@type, ['circle_element','rectangle_element']) != -1
        name = @getFieldValue("name")
        return if name is "[nimeltään]"
        CodeArea.settableElements.push name

  settableElementsDropdownValues: (emptyVal) ->
    CodeArea.getSettableElements()
    dropdownValues = $.map(CodeArea.settableElements, ((n) -> [[n, n]]) )
    emptyVal = "[valitse]" unless emptyVal?
    dropdownValues = [[emptyVal, "x"]] if dropdownValues.length is 0
    dropdownValues


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
    .appendField new Blockly.FieldDropdown(CodeArea.settableElementsDropdownValues), "element"
  @appendStatementInput("when").appendField "tee"
  @setPreviousStatement true
  @setNextStatement true
  return

Blockly.JavaScript["when_clicked"] = (block) ->
  element = block.getFieldValue("element")
  statements_when = Blockly.JavaScript.statementToCode(block, "when")
  code = "onClick('"+element+"', function(){\n//[STATEMENT] });\n"
  code = code.replace("//[STATEMENT]", statements_when)
  code

Blockly.Blocks["when_pressed"] = init: ->
  @setColour 180
  @appendDummyInput("event")
    .appendField "kun painetaan näppäintä"
    .appendField new Blockly.FieldDropdown([['[valitse]',''],["nuoli oikealle","right"],["nuoli vasemmalle","left"],["nuoli ylös","up"],["nuoli alas","down"],["X-kirjain","x"]]), "key"
  @appendStatementInput("when").appendField "tee"
  @setPreviousStatement true
  @setNextStatement true
  return

Blockly.JavaScript["when_pressed"] = (block) ->
  key = block.getFieldValue("key")
  statements_when = Blockly.JavaScript.statementToCode(block, "when")
  code = "onKeypress('"+key+"', function(){\n//[STATEMENT] });\n"
  code = code.replace("//[STATEMENT]", statements_when)
  code

Blockly.Blocks["gravity_switch"] = init: ->
  @setColour 260
  @appendDummyInput().appendField("aseta painovoimaksi")
    .appendField new Blockly.FieldDropdown([ ["maa","earth"],["kuu","moon"],["avaruus","space"] ]), "gravity"
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["gravity_switch"] = (block) ->
  dropdown_gravity = block.getFieldValue("gravity")
  switch dropdown_gravity
    when "earth"
      gravity_value = 0.0006
    when "moon"
      gravity_value = 0.00015
    when "space"
      gravity_value = 0
  code = "setGravity(0,"+gravity_value+");\n"
  code

Blockly.Blocks["wait_for"] = init: ->
  @setColour 160
  @appendDummyInput().appendField "odota"
  @appendValueInput("seconds").setCheck "Number"
  @appendDummyInput().appendField "sekunti(a)"
  @appendStatementInput "statements"
  @setInputsInline true
  @setPreviousStatement true
  @setNextStatement true
  @setTooltip ""
  return

Blockly.JavaScript["wait_for"] = (block) ->
  value_seconds = Blockly.JavaScript.valueToCode(block, "seconds", Blockly.JavaScript.ORDER_ATOMIC)
  statements = Blockly.JavaScript.statementToCode(block, "statements")
  code = "addToExecQueue(function(){\n" + statements + "}," + value_seconds + ");\n"
  code
