@Loops =
  levelCount: 3
  walkerOnGoal: false

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    @walkerOnGoal = false
    # set level somehow (address or view)
    switch @level
      when 1
        Loops.walker = Stage.createElement('walker',[6,8]);
        Loops.goal = Stage.createElement('goal',[10,6], { type: 'goal' });
        for x in [0..Stage.horizontalBlocks]
          for y in [0..Stage.verticalBlocks]
            continue if x is  6 and y is  8
            continue if x is  7 and y is  8
            continue if x is  8 and y is  8
            continue if x is  9 and y is  8
            continue if x is  9 and y is  7
            continue if x is  9 and y is  6
            continue if x is 10 and y is  6
            Stage.createElement 'obstacle', [x,y], { type: 'obstacle' }
      when 2
        route = [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
          [ 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ]
      when 3
        route = [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ]
      when 4 then

    if route?
      for x in [1..Stage.horizontalBlocks]
        for y in [1..Stage.verticalBlocks]
          block = route[y-1][x-1]
          Stage.createElement 'obstacle', [x,y], { type: 'obstacle' } if block is 0
          Loops.walker = Stage.createElement('walker',[x,y]) if block is 2
          Loops.goal = Stage.createElement('goal',[x,y], { type: 'goal' }) if block is 3

  evaluate: ->
    # set level somehow (address or view)
    # determine the evaluation basis
    switch @level
      when 1, 2, 3
        console.log @walkerOnGoal
        return true if @walkerOnGoal
        # some complex logic on the grid to check whether or not we are
        # done

  nudgeAction: (direction) ->
    delay = (ms, func) -> setTimeout func, ms
    mw = Loops.walker
    np = switch direction
      when 'left' then [mw.state.pos.x-2, mw.state.pos.y]
      when 'right' then [mw.state.pos.x+2, mw.state.pos.y]
      when 'up' then [mw.state.pos.x, mw.state.pos.y-2]
      when 'down' then [mw.state.pos.x, mw.state.pos.y+2]

    dx = mw.state.pos.x
    dy = mw.state.pos.y
    delay   0, -> mw.state.pos.set(np[0],np[1]) # nudge
    delay 100, -> mw.state.pos.set(dx,dy) # return to default
    delay 200, -> mw.state.pos.set(np[0],np[1]) # nudge again
    delay 300, -> mw.state.pos.set(dx,dy) # return to default

  moveAction: (x,y,direction) ->
    @walkerOnGoal = false
    nextElem = Stage.world.findOne($at: Physics.vector(x,y))
    if nextElem
      doNudge = true if nextElem.properties and nextElem.properties.type is 'obstacle'
      @walkerOnGoal = true if nextElem.properties and nextElem.properties.type is 'goal'
    if doNudge
    then Loops.nudgeAction(direction)
    else Loops.walker.state.pos.set(x,y)

  moveLeft: ->
    return unless Loops.walker
    mw = Loops.walker
    @moveAction(mw.state.pos.x-Stage.blockWidth, mw.state.pos.y, 'left');

  moveRight: ->
    return unless Loops.walker
    mw = Loops.walker
    @moveAction(mw.state.pos.x+Stage.blockWidth,mw.state.pos.y, 'right')

  moveUp: ->
    return unless Loops.walker
    mw = Loops.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y-Stage.blockHeight,'up')

  moveDown: ->
    return unless Loops.walker
    mw = Loops.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y+Stage.blockHeight,'down')

  stageElement: (type,posX,posY) ->
    elem = switch type
      when 'default' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        #width: Stage.blockWidth-1
        #height: Stage.blockHeight-1
        radius: (Stage.blockWidth/2)-2
      when 'obstacle' then Physics.body 'rectangle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        width: Stage.blockWidth-1
        height: Stage.blockHeight-1
      when 'goal' then Physics.body "convex-polygon",
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vertices: [
          { x: 8, y: -14 },
          { x: -8, y: -14 },
          { x: -16, y: 0 },
          { x: -8, y: 14 },
          { x: 8, y: 14 },
          { x: 16, y: 0 }
        ]
    elem.treatment = 'static'
    return elem

  interpreterApi: (interpreter, scope) ->
    wrapper = (id) ->
      Loops.moveUp()
    interpreter.setProperty scope, "moveUp", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Loops.moveDown()
    interpreter.setProperty scope, "moveDown", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Loops.moveLeft()
    interpreter.setProperty scope, "moveLeft", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Loops.moveRight()
    interpreter.setProperty scope, "moveRight", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Loops.isPath(0, id.toString())
    interpreter.setProperty scope, "isPathForward", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Loops.isPath(1, id.toString())
    interpreter.setProperty scope, "isPathRight", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Loops.isPath(2, id.toString())
    interpreter.setProperty scope, "isPathBackward", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Loops.isPath(3, id.toString())
    interpreter.setProperty scope, "isPathLeft", interpreter.createNativeFunction(wrapper)

    Exercises.commonInterpreterApi(interpreter,scope)
