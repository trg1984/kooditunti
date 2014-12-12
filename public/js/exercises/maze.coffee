# requires Stage
# element named walker is our target
@Maze =
  walkerOnGoal: false

  init: ->
    @levelSetup()

  levelSetup: ->
    @walkerOnGoal = false
    # set level somehow (address or view)
    level = 1
    switch level
      when 1
        Maze.walker = Stage.createElement('walker',[6,8]);
        Maze.goal = Stage.createElement('goal',[10,6], { type: 'goal' });
        for x in [0..Stage.horizontalBlocks]
          for y in [0..Stage.verticalBlocks]
            #continue if x is  5 and y is  8
            continue if x is  6 and y is  8
            continue if x is  7 and y is  8
            continue if x is  8 and y is  8
            continue if x is  9 and y is  8
            continue if x is  9 and y is  7
            continue if x is  9 and y is  6
            continue if x is 10 and y is  6
            Stage.createElement 'obstacle', [x,y], { type: 'obstacle' }
      when 2 then
      when 3 then
      when 4 then

  evaluate: ->
    # set level somehow (address or view)
    # determine the evaluation basis
    level = 1
    switch level
      when 1
        return true if @walkerOnGoal
        # some complex logic on the grid to check whether or not we are
        # done
      when 2 then
      when 3 then
      when 4 then

  nudgeAction: (direction) ->
    delay = (ms, func) -> setTimeout func, ms
    mw = Maze.walker
    np =switch direction
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
    then Maze.nudgeAction(direction)
    else Maze.walker.state.pos.set(x,y)

  moveLeft: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x-Stage.blockWidth, mw.state.pos.y, 'left');

  moveRight: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x+Stage.blockWidth,mw.state.pos.y, 'right')

  moveUp: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y-Stage.blockHeight,'up')

  moveDown: ->
    return unless Maze.walker
    mw = Maze.walker
    @moveAction(mw.state.pos.x,mw.state.pos.y+Stage.blockHeight,'down')

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
      interpreter.createPrimitive Maze.isPath(0, id.toString())
    interpreter.setProperty scope, "isPathForward", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Maze.isPath(1, id.toString())
    interpreter.setProperty scope, "isPathRight", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Maze.isPath(2, id.toString())
    interpreter.setProperty scope, "isPathBackward", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      interpreter.createPrimitive Maze.isPath(3, id.toString())
    interpreter.setProperty scope, "isPathLeft", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      id = (if id then id.toString() else "")
      interpreter.createPrimitive Blockly.mainWorkspace.highlightBlock(id)
    interpreter.setProperty scope, "highlightBlock", interpreter.createNativeFunction(wrapper)
