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

      when 3
        Exercises.preloadBlocklyBlocks = true

        Maze.walkerOnGoal = false
        route = [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0 ],
          [ 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0 ],
          [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
          [ 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0 ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ]
        if route?
          for x in [1..Stage.horizontalBlocks]
            for y in [1..Stage.verticalBlocks]
              block = route[y-1][x-1]
              Stage.createElement 'obstacle', [x,y], { type: 'obstacle' } if block is 0
              Maze.walker = Stage.createElement('walker',[x,y]) if block is 2
              Maze.goal = Stage.createElement('goal',[x,y], { type: 'goal' }) if block is 3
              Stage.createElement('special',[x,y], { type: 'special' }) if block is 4

        Blockly.Workspace.prototype.remainingCapacity = ->
          moveBlocks = 0
          repeatBlocks = 0
          for i,block of Blockly.mainWorkspace.getAllBlocks()
            if -1 isnt $.inArray block.type, ['move_up','move_down','move_left','move_right']
              moveBlocks++
            if block.type is 'controls_repeat_ext'
              repeatBlocks++

          return 0 if repeatBlocks > 1
          return 5-moveBlocks

  evaluate: ->
    switch @level
      when 1
        return false
      when 2
        return false
      when 3
        return true if Maze.walkerOnGoal

  stageElement: (type,posX,posY) ->
    Maze.stageElement(type,posX,posY)

  interpreterApi: (interpreter, scope) ->
    Maze.interpreterApi(interpreter,scope)
    Exercises.commonInterpreterApi(interpreter,scope)
