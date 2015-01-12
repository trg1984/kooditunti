Blockly.Blocks["coordinate_array_simple"] = init: ->
  coordPlaces = [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],
                ["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],
                ["11","11"],["12","12"],["13","13"],["14","14"]]
  @setColour(230);
  @appendDummyInput("position").setAlign(Blockly.ALIGN_RIGHT)
    .appendField new Blockly.FieldDropdown($.merge([["X", "X"]],coordPlaces)), "xpos"
    .appendField new Blockly.FieldDropdown($.merge([["Y", "Y"]],coordPlaces)), "ypos"
  @setOutput(true, "Array");
  @setInputsInline(true);

Blockly.JavaScript["coordinate_array_simple"] = (block) ->
  xpos = block.getFieldValue("xpos")
  xpos = if xpos is "X" then 1 else xpos
  ypos = block.getFieldValue("ypos")
  ypos = if ypos is "Y" then 1 else ypos
  return ["["+xpos+","+ypos+"]",Blockly.JavaScript.ORDER_ATOMIC]

Blockly.Blocks["text_element"] =
  init: ->
    @setColour 300
    @appendValueInput("text").setAlign(Blockly.ALIGN_RIGHT).appendField "Luo teksti"
    @setPreviousStatement true
    @setNextStatement true
    @setMutator(new Blockly.Mutator(['position_mutator'])); # ,'color_mutator' TODO
    @extraProperties = []

  mutationToDom: BlocklyExtraPropertiesPatch.mutationToDom
  domToMutation: BlocklyExtraPropertiesPatch.domToMutation
  decompose: BlocklyExtraPropertiesPatch.decompose
  compose: BlocklyExtraPropertiesPatch.compose
  extraPropertySetter: BlocklyExtraPropertiesPatch.extraPropertySetter
  saveConnections: BlocklyExtraPropertiesPatch.saveConnections
  doHideExtras: BlocklyExtraPropertiesPatch.doHideExtras
  hideExtras: BlocklyExtraPropertiesPatch.hideExtras

Blockly.JavaScript["text_element"] = (block) ->
  value_text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC)
  properties = JSON.stringify
    position: eval Blockly.JavaScript.valueToCode(block, "position_mutator", Blockly.JavaScript.ORDER_ATOMIC)
  code = "createText("+value_text+",'"+properties+"');\n"
  code

Blockly.Blocks["rectangle_element"] =
  init: ->
    @setColour 300
    @appendValueInput("name").appendField "Luo nelikulmio"
    @setPreviousStatement true
    @setNextStatement true
    @setTooltip ""
    @setMutator(new Blockly.Mutator(['position_mutator','width_mutator','height_mutator'])); # ,'color_mutator' TODO
    @extraProperties = []

  mutationToDom: BlocklyExtraPropertiesPatch.mutationToDom
  domToMutation: BlocklyExtraPropertiesPatch.domToMutation
  decompose: BlocklyExtraPropertiesPatch.decompose
  compose: BlocklyExtraPropertiesPatch.compose
  extraPropertySetter: BlocklyExtraPropertiesPatch.extraPropertySetter
  saveConnections: BlocklyExtraPropertiesPatch.saveConnections
  doHideExtras: BlocklyExtraPropertiesPatch.doHideExtras
  hideExtras: BlocklyExtraPropertiesPatch.hideExtras


Blockly.Blocks["circle_element"] =
  init: ->
    @setColour 300
    @appendValueInput("name").appendField "Luo ympyrä"
    @setPreviousStatement true
    @setNextStatement true
    @setTooltip ""
    @setMutator(new Blockly.Mutator(['position_mutator','radius_mutator'])); # ,'color_mutator' TODO
    @extraProperties = []

  mutationToDom: BlocklyExtraPropertiesPatch.mutationToDom
  domToMutation: BlocklyExtraPropertiesPatch.domToMutation
  decompose: BlocklyExtraPropertiesPatch.decompose
  compose: BlocklyExtraPropertiesPatch.compose
  extraPropertySetter: BlocklyExtraPropertiesPatch.extraPropertySetter
  saveConnections: BlocklyExtraPropertiesPatch.saveConnections
  doHideExtras: BlocklyExtraPropertiesPatch.doHideExtras
  hideExtras: BlocklyExtraPropertiesPatch.hideExtras

buildPropertiesObjectAsString = (pairs) ->
  eo = "{"
  keyCount = (k for own k of pairs).length
  i = 0
  for k, v of pairs
    v = "null" if v? && v is ""
    eo+= ""+k+": "+v
    eo+= ", " if i isnt keyCount - 1
    i++
  eo+= "}"
  return eo

createElementJavascript = (block) ->
  inputs = {}
  $.each block.inputList, (i,v) ->
    inputs[v.name.replace("_mutator","")] = Blockly.JavaScript.valueToCode(block, v.name, Blockly.JavaScript.ORDER_ATOMIC)
  # define type by block
  inputs['type'] = "'rectangle'" if block.type is "rectangle_element"
  inputs['type'] = "'circle'" if block.type is "circle_element"
  # property object as string
  pos = buildPropertiesObjectAsString inputs
  if inputs.radius?
    # collects an error only if we have it defined (see for example Vars.errorCollector)
    # otherwise passes without errors
    Errors.collect('createElement_variable', {values: {radius:inputs.radius}, block: block})
  code = "createElement("+pos+");\n"
  code

Blockly.JavaScript["rectangle_element"] = createElementJavascript
Blockly.JavaScript["circle_element"] = createElementJavascript
