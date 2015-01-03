@Ifs =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        console.log 1
      when 2
        console.log 1
      when 3
        console.log 1

  evaluate: ->
    switch @level
      when 1
        return true
      when 2
        return true
      when 3
        return true

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
