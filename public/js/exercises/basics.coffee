@Basics =
  levelCount: 3

  init: (level) ->
    @level = level
    @levelSetup()

  levelSetup: ->
    switch @level
      when 1
        Blockly.BlockSvg.afterConnectionMouseUp = (connection) ->
          JediMaster.resumeTour()
        $("#start-execution-btn").one "click", ->
          Foundation.libs.joyride.end() if JediMaster.onTour
      when 2
        Stage.setGravity('earth')
        Exercises.preloadBlocklyBlocks = true
        @endOnLastSlide = ->
          $("#start-execution-btn").one "click", ->
            Foundation.libs.joyride.end() if JediMaster.onTour
      when 3
        Exercises.automaticallyEndExecution = false
        Exercises.manualEvaluation = true
        $("#start-execution-btn").click ->
          setTimeout ->
            JediMaster.resumeTour ->
              $(".tooltip").addClass("disabled")
              $("#evaluate-btn").one "click", ->
                Foundation.libs.joyride.end() if JediMaster.onTour
                $(".tooltip").removeClass("disabled").hide()
          , 2000

  evaluate: ->
    switch @level
      when 1
        stageHasText = Stage.textElements[0] && Stage.textElements[0].text isnt ""
        return true if stageHasText
      when 2
        return true
      when 3
        return false

  #createBall: (name,radius) ->
    #Stage.createElement(name,[7,7],{type: 'circle', radius: radius})

  stageElement: (type,posX,posY,props) ->
    return switch type
      when 'circle' then Physics.body 'circle',
        x: (posX+Stage.blockWidth/2)+100+Math.random() # make them scatter just a bit...
        y: (posY+Stage.blockHeight/2)+1 # y-coordinate
        vx: 0 # velocity in x-direction
        vy: 0 # velocity in y-direction
        radius: props.radius

  interpreterApi: (interpreter, scope) ->
    #wrapper = () ->
      #Basics.createBall("simple",30)
    #interpreter.setProperty scope, "createBall", interpreter.createNativeFunction(wrapper)
    Exercises.commonInterpreterApi(interpreter,scope)
