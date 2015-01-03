@Basics =
  levelCount: 2

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Blockly.Block.prototype.afterConnection = (connection) ->
          JediMaster.resumeTour()
        $("#start-execution-btn").one "click", ->
          Foundation.libs.joyride.end()
      when 2
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
        $("#start-execution-btn").click ->
          JediMaster.resumeTour ->
            $(".tooltip").addClass("disabled")
            $("#evaluate-btn").one "click", ->
              Foundation.libs.joyride.end()
              $(".tooltip").removeClass("disabled").hide()
              $(@).trigger('click')

  evaluate: ->
    switch @level
      when 1
        return true
      when 2
        return false

  interpreterApi: (interpreter, scope) ->
    Exercises.commonInterpreterApi(interpreter,scope)
