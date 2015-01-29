@Events =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
      when 2
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
      when 3
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
        Exercises.preloadBlocklyBlocks = true
        @bindNextTourToMutatorIconClick = ->
          Blockly.Mutator.afterClick = ->
            Foundation.libs.joyride.go_next()
            Blockly.Mutator.afterClick = (-> return)
        @unbindMutatorIconClick = ->
          Blockly.Mutator.afterClick = (-> return)

  evaluate: ->
    switch @level
      when 1, 2, 3
        return false

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
