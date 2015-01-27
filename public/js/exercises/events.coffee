@Events =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1 then
      when 2 then
      when 3 then

  evaluate: ->
    switch @level
      when 1, 2, 3
        return true

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
