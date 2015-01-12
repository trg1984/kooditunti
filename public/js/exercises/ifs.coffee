@Ifs =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        #Stage.createElement(name,[3,3],{type: 'circle', radius: 20, vy: 0.00, xy: 0.00 })
        Exercises.automaticallyEndExecution = false
        Exercises.preloadBlocklyBlocks = true
        Exercises.manualEvaluation = true
      when 2
        Exercises.automaticallyEndExecution = false
        Exercises.preloadBlocklyBlocks = true
        Exercises.manualEvaluation = true
        @hideBubbles = ->
          for block in Blockly.mainWorkspace.getAllBlocks()
            hasMutator = block.mutator?
            isOpen = if hasMutator then Blockly.Icon.prototype.isVisible.call(block.mutator) else false
            block.mutator.iconClick_() if hasMutator && isOpen
        @bindNextTourToMutatorIconClick = ->
          Blockly.Mutator.afterClick = ->
            Foundation.libs.joyride.go_next()
            Blockly.Mutator.afterClick = (-> return)
      when 3
        Exercises.automaticallyEndExecution = false
        Exercises.preloadBlocklyBlocks = true
        Exercises.manualEvaluation = true

  evaluate: ->
    switch @level
      when 1
        return false
      when 2
        return false
      when 3
        return false

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: props.xy # velocity in x-direction
        vy: props.vy # velocity in y-direction
        radius: props.radius
      when 'rectangle' then Physics.body 'rectangle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: props.xy # velocity in x-direction
        vy: props.vy # velocity in y-direction
        width: props.width
        height: props.height

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
