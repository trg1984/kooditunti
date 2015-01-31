@Loops =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    Maze.walkerOnGoal = false
    # set level somehow (address or view)
    switch @level
      when 1
        Maze.walker = Stage.createElement('walker',[6,8]);
        Maze.goal = Stage.createElement('goal',[10,6], { type: 'goal' });
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
          Maze.walker = Stage.createElement('walker',[x,y]) if block is 2
          Maze.goal = Stage.createElement('goal',[x,y], { type: 'goal' }) if block is 3

  evaluate: ->
    # set level somehow (address or view)
    # determine the evaluation basis
    switch @level
      when 1, 2, 3
        return true if Maze.walkerOnGoal
        # some complex logic on the grid to check whether or not we are
        # done

  stageElement: (type,posX,posY) ->
    Maze.stageElement(type,posX,posY)

  interpreterApi: (interpreter, scope) ->
    Maze.interpreterApi(interpreter,scope)
    Exercises.commonInterpreterApi(interpreter,scope)
