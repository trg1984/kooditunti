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
    @setColour 200
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

Blockly.Blocks["circle_element"] =
  init: ->
    @setColour 105
    @appendValueInput("name").appendField "Luo pallo"
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

Blockly.JavaScript["circle_element"] = (block) ->
  name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC)
  # properties as json string.
  properties = JSON.stringify
    # can use eval as long as using simple coordinates (has no variables)
    position: eval Blockly.JavaScript.valueToCode(block, "position_mutator", Blockly.JavaScript.ORDER_ATOMIC)
    radius: parseInt Blockly.JavaScript.valueToCode(block, "radius_mutator", Blockly.JavaScript.ORDER_ATOMIC)

  code = "createBall("+name+",'"+properties+"');\n"
  console.log code

  # Allows for more control of the users errors (for example that we need a certain type of block etc...),
  # but this needs to be implemented better.
  ## in level 1, we want our value to come from a variable, not a number
  #isNumberAlready = isNaN parseInt(value_radius)
  #if isNumberAlready or Exercises.currentLevel isnt 1
    #code = "createBall("+value_name+","+value_radius+");\n"
  #else
    ##code = "notify('needs_to_be_a_variable')"
    #code = ""
    #modalPos = JediMaster.calculatePositionByBlock(block)
    #JediMaster.pointModalWithGuidance('Halkaisija täytyy määrittää muuttujana', modalPos)
    #Exercises.endExecution("nodialog")
  code
