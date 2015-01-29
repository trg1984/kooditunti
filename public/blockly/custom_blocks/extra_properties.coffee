Blockly.Blocks["extra_properties_container"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "ominaisuudet"
  @appendStatementInput "STACK"
  @contextMenu = false
  return

Blockly.Blocks["radius_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField("halkaisija")
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

Blockly.Blocks["width_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "leveys"
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

Blockly.Blocks["height_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "korkeus"
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

Blockly.Blocks["position_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "sijainti"
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

Blockly.Blocks["velocity_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "kiihtyvyys"
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

Blockly.Blocks["color_mutator"] = init: ->
  @setColour 210
  @appendDummyInput().appendField "väri"
  @setPreviousStatement true
  @setNextStatement true
  @contextMenu = false
  return

