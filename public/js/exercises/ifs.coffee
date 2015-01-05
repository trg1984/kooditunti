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
      when 2 then
      when 3 then

  evaluate: ->
    switch @level
      when 1
        return true
      when 2
        return true
      when 3
        return true

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: props.xy # velocity in x-direction
        vy: props.vy # velocity in y-direction
        radius: props.radius

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
