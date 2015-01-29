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

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
