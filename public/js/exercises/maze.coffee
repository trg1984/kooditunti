@Maze =
  walker: null
  goal: null
  walkerOnGoal: false
  walkerOnSpecial: false
  stageElement: (type,posX,posY) ->
    elem = switch type
      when 'default' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        radius: (Stage.blockWidth/2)-2
        styles:
          strokeStyle: "#351024"
          lineWidth: 2
          fillStyle: "#42A3A3"
          angleIndicator: "#000"
      when 'obstacle' then Physics.body 'rectangle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        width: Stage.blockWidth-1
        height: Stage.blockHeight-1
        styles:
          fillStyle: "#999999"
      when 'special' then Physics.body 'rectangle',
        x: (posX+Stage.blockWidth/2)+1 # x-coordinate
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        width: Stage.blockWidth-15
        height: Stage.blockHeight-15
        styles:
          fillStyle: "#F08080"
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
        styles:
          fillStyle: "#FF9900"
          strokeStyle: "#CC6600"
          lineWidth: 3
    elem.treatment = 'static' if elem?
    return elem

  nudgeAction: (direction) ->
    delay = (ms, func) -> setTimeout func, ms
    mw = Maze.walker
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
    @walkerOnSpecial = false
    nextElem = Stage.world.findOne($at: Physics.vector(x,y))
    if nextElem
      doNudge = true if nextElem.properties and nextElem.properties.type is 'obstacle'
      @walkerOnGoal = true if nextElem.properties and nextElem.properties.type is 'goal'
      @walkerOnSpecial = true if nextElem.properties and nextElem.properties.type is 'special'
    if doNudge
    then Maze.nudgeAction(direction)
    else Maze.walker.state.pos.set(x,y)

  moveLeft: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x-Stage.blockWidth, mw.state.pos.y, 'left');
    mw.state.angular.pos = 3.12

  moveRight: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x+Stage.blockWidth,mw.state.pos.y, 'right')
    mw.state.angular.pos = 0

  moveUp: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y-Stage.blockHeight,'up')
    mw.state.angular.pos = -1.56

  moveDown: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y+Stage.blockHeight,'down')
    mw.state.angular.pos = 1.56

  interpreterApi: (interpreter, scope) ->
    wrapper = (id) ->
      Maze.moveUp()
    interpreter.setProperty scope, "moveUp", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Maze.moveDown()
    interpreter.setProperty scope, "moveDown", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Maze.moveLeft()
    interpreter.setProperty scope, "moveLeft", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      Maze.moveRight()
    interpreter.setProperty scope, "moveRight", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      return interpreter.createPrimitive(Maze.walkerOnSpecial)
    interpreter.setProperty scope, "inSpecialLocation", interpreter.createNativeFunction(wrapper)
