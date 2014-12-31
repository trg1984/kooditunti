@Vars =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Exercises.automaticallyEndExecution = false
        Stage.setGravity('earth');
        Exercises.preloadBlocklyBlocks = true
      when 2
        Exercises.automaticallyEndExecution = false
        Stage.setGravity('earth');
        Exercises.manualEvaluation = true
        Exercises.preloadBlocklyBlocks = true
      when 3
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
        Stage.setGravity('earth');

    if route?
      for x in [1..Stage.horizontalBlocks]
        for y in [1..Stage.verticalBlocks]
          block = route[y-1][x-1]
          Stage.createElement 'obstacle', [x,y], { type: 'obstacle' } if block is 0
          Maze.walker = Stage.createElement('walker',[x,y]) if block is 2
          Maze.goal = Stage.createElement('goal',[x,y], { type: 'goal' }) if block is 3

  evaluate: ->
    switch @level
      when 1
        stageHasBall = Stage.world.getBodies().length is 1
        return true if stageHasBall
      when 2 then
      when 3 then
      when 4 then

  createBall: (name,radius) ->
    Stage.createElement(name,[7,7],{type: 'circle', radius: radius, settable: true})

  textElement: {}
  createText: (text) ->
    Stage.textElements[0] = { text: text, alive: true }
    #Stage.drawText(@textElement)

  onClick: (elem, callback, intrp, scope) ->
    $('#viewport').on 'click', (event) ->
      body = Stage.findClickTarget(@,event,elem)
      if body
        intrp.stateStack.unshift({node: callback.node.body, scope: scope})
        intrp.run()

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        #width: Stage.blockWidth-1
        #height: Stage.blockHeight-1
        radius: props.radius

  interpreterApi: (interpreter, scope) ->
    wrapper = (name,size) ->
      if typeof size.data isnt "undefined" and size.data isnt 0
        Vars.createBall(name.data,size.data)
      else
        msg = 'En tiedä pallon halkaisijaa. Olethan asettanut sille jonkin arvon?'
        modalPos = JediMaster.calculatePositionByBlock(Exercises.activeBlock)
        JediMaster.pointModalWithGuidance(msg, modalPos)
        Exercises.endExecution("nodialog")
    interpreter.setProperty scope, "createBall", interpreter.createNativeFunction(wrapper)

    wrapper = (text) ->
      if typeof text.data isnt "undefined"
        Vars.createText(text.data)
      else
        msg = 'En tiedä pallon halkaisijaa. Olethan asettanut sille jonkin arvon?'
        modalPos = JediMaster.calculatePositionByBlock(Exercises.activeBlock)
        JediMaster.pointModalWithGuidance(msg, modalPos)
    interpreter.setProperty scope, "createText", interpreter.createNativeFunction(wrapper)

    wrapper = (elem,callback) ->
      Vars.onClick(elem.data,callback,interpreter,scope)
    interpreter.setProperty scope, "onClick", interpreter.createNativeFunction(wrapper)

    Exercises.commonInterpreterApi(interpreter,scope)
