@Basics =
  levelCount: 3

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
        Stage.setGravity('earth');
        console.log("level 2")
        @endOnLastSlide = ->
          $("#start-execution-btn").one "click", ->
            Foundation.libs.joyride.end()
      when 3
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
        return true
      when 3
        return false


  createBall: (name,radius) ->
    Stage.createElement(name,[7,7],{type: 'circle', radius: radius})

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        radius: props.radius

  interpreterApi: (interpreter, scope) ->
    wrapper = () ->
      Basics.createBall("simple",30)
    interpreter.setProperty scope, "createBall", interpreter.createNativeFunction(wrapper)
    Exercises.commonInterpreterApi(interpreter,scope)
