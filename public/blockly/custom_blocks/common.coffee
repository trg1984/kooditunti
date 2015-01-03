Blockly.Blocks["text_element"] = init: ->
  @setColour 200
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

