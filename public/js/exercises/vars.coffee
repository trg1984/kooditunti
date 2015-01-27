@Vars =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
        #Exercises.hasSolution = true
        Stage.setGravity('earth');
        Exercises.preloadBlocklyBlocks = true
        @resumeTourAfterExecution = ->
          JediMaster.onTour = false
          $("#start-execution-btn").one "click", ->
            JediMaster.resumeTour ->
              $(".tooltip").addClass("disabled")
      when 2
        Exercises.automaticallyEndExecution = true
        Exercises.manualEvaluation = false
        Stage.setGravity('earth');
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
      when 1 then
      when 2
        stageHasSomething = Stage.world.getBodies().length isnt 0
        return true if stageHasSomething
      when 3 then
      when 4 then

  errorCollector: (id, data) ->
    if @level is 2
      if id is "createElement_variable"
        isNumberAlready = not isNaN parseInt(data.values.radius)
        err = "Koko täytyy antaa muuttujana" if isNumberAlready
      if id is "createElement_undefined"
        radius = data.values.radius
        isUndefined = radius.type is 'undefined' or radius.data is 0
        err = "Muuttujaa ei ole asetettu tai sillä ei ole arvoa" if isUndefined
      if id is "createElement_type_error"
        radius = data.values.radius
        isntNumber = radius.type is 'string'
        err = "Muuttuja täytyy antaa numerona" if isntNumber
    return err

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
    wrapper = (text) ->
      if typeof text.data isnt "undefined"
        Api.createText(text.data)
    interpreter.setProperty scope, "createText", interpreter.createNativeFunction(wrapper)

    wrapper = (elem,callback) ->
      Vars.onClick(elem.data,callback,interpreter,scope)
    interpreter.setProperty scope, "onClick", interpreter.createNativeFunction(wrapper)

    Exercises.commonInterpreterApi(interpreter,scope)
