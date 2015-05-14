@NameOfTheExercise =
  levelCount: 0
  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    # fill me in

  evaluate: ->
    # fill me in

  stageElement: (type,posX,posY,props) ->
    # fill me in

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
