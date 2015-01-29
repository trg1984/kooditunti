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

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
