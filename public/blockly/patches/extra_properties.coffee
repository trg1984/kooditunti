@BlocklyExtraPropertiesPatch =

  mutationToDom: ->
    return null if not @extraProperties? or @extraProperties.length is 0
    container = document.createElement("mutation")
    container.setAttribute "properties", @extraProperties.join(",")
    container

  domToMutation: (xmlElement) ->
    pb = @
    ep = xmlElement.getAttribute('properties')
    ep = if ep? then ep.split(",") else []
    $.each ep, (i,v) ->
      pb.extraPropertySetter v

  decompose: (workspace) ->
    # build extra properties to container block
    @doHideExtras = null
    @allExtras = @mutator.quarkXml_
    containerBlock = Blockly.Block.obtain(workspace, "extra_properties_container")
    containerBlock.initSvg()
    connection = containerBlock.getInput("STACK").connection
    if @extraProperties?
      $.each @extraProperties, (i,v) ->
        b = Blockly.Block.obtain(workspace, v+"_mutator")
        b.initSvg()
        connection.connect b.previousConnection
        connection = b.nextConnection
    containerBlock

  compose: (containerBlock) ->
    # build extra properties to block
    pb = @
    if @extraProperties? && @extraProperties.length isnt 0
      $.each @extraProperties, (i,v) ->
        pb.removeInput v+"_mutator"
    @extraProperties = []
    clauseBlock = containerBlock.getInputTargetBlock("STACK")

    while clauseBlock
      shortType = clauseBlock.type.replace("_mutator","")
      switch shortType
        when "color", "position", "radius", "height", "width"
          input = @extraPropertySetter shortType
          # reconnect children
          input.connection.connect clauseBlock.valueConnection_ if clauseBlock.valueConnection_
        else
          throw "Unknown block type."
      clauseBlock = clauseBlock.nextConnection and clauseBlock.nextConnection.targetBlock()

    # uncomment to use the bad implementation of hiding used properties
    #pb.hideExtras() if not pb.doHideExtras
    #if pb.doHideExtras
      #pb.doHideExtras = false
      #setTimeout (-> pb.hideExtras()), 200

  extraPropertySetter: (name) ->
    @extraProperties.push name
    return @appendValueInput(name+"_mutator").setAlign(Blockly.ALIGN_RIGHT).appendField(L.mutators[name])

  saveConnections: (containerBlock) ->
    clauseBlock = containerBlock.getInputTargetBlock("STACK")
    while clauseBlock
      input = @getInput(clauseBlock.type)
      clauseBlock.valueConnection_ = input and input.connection.targetConnection
      clauseBlock = clauseBlock.nextConnection and clauseBlock.nextConnection.targetBlock()

  # Bad implentation of hiding blocks that are already used
  # that are already used...
  # Better implementation probably needs to change Blockly
  # NOT IN USE
  doHideExtras: null
  hideExtras: ->
    pb = @
    pb.doHideExtras = true
    # hide the ones already added
    extrasToSkip = []
    $.each pb.extraProperties, (si,selectedType) ->
      $.each pb.allExtras, (ai,xmlNode) ->
        type = $(xmlNode).attr('type')
        extrasToSkip.push ai if type is selectedType
    # add the ones to render from
    extrasToShow = []
    $.each pb.allExtras, (i,v) ->
      extrasToShow.push v if $.inArray(i, extrasToSkip) is -1

    $.each pb.mutator.workspace_.flyout_.workspace_.getAllBlocks(), (i,v) ->
      v.setDisabled(true)
      v.dispose()

    pb.mutator.workspace_.flyout_.show(extrasToShow)
