@Playground =
  levelCount: 1

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Exercises.automaticallyEndExecution = false

  evaluate: ->
    switch @level
      when 1
        return false

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2) # y-coordinate
        vx: props.xy # velocity in x-direction
        vy: props.vy # velocity in y-direction
        radius: props.radius
      when 'rectangle' then Physics.body 'rectangle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: props.xy # velocity in x-direction
        vy: props.vy # velocity in y-direction
        restitution: 0.3,
        width: props.width
        height: props.height

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
