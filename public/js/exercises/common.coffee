@Exercises =
  currentExercise: null
  isExecuting: false
  resizeCodeAreaUp: true

  initBlockly: ->
    Blockly.inject document.getElementById("blockly"),
      path: "/vendor/blockly/"
      toolbox: blocklyToolboxElem
      scrollbars: true
      sounds: false
      trashcan: false

    url = window.location.href.split("#")[0]
    if "localStorage" of window and not window.localStorage[url]
      if defaultBlocklyArrangement?
        window.localStorage[url] = defaultBlocklyArrangement
    #window.setTimeout BlocklyStorage.restoreBlocks, 0
    #BlocklyStorage.backupOnUnload()
    return

  resizeCodeArea: ->
    windowWidth = $(window).width()
    console.log windowWidth
    newWidth = switch
      when Exercises.isExecuting or windowWidth > 1450 then windowWidth-650
      else 800 if Exercises.resizeCodeAreaUp
    $(".overlay-resize").animate(width: newWidth);

  endExecution: ->
    $("#execute-btn a").text("Suorita koodi")
    Exercises.isExecuting = false
    Exercises.resizeCodeArea()
    if Exercises.currentExercise.evaluate()
      # woohoo we have passed the level
      # get info for prompts on DOM
      # and move on or something...
      alert("DONE!")
    else
      # no luck, try again? (dialog texts from DOM)
      #alert("Yritä uudelleen")
      Stage.reset()
      Exercises.currentExercise.levelSetup()

  runCode: ->
    $("#execute-btn a").text("Keskeytä suoritus")
    Exercises.isExecuting = true
    Exercises.resizeCodeArea()
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    Blockly.mainWorkspace.traceOn(true);
    Blockly.mainWorkspace.highlightBlock(null);
    code = Blockly.JavaScript.workspaceToCode()
    console.log(code)
    intrp = new Interpreter(code, Maze.interpreterApi)
    nextStep = ->
      #BlocklyInterface.highlight(action[1]);
      if intrp.step()
        window.setTimeout nextStep, 20
      else
        setTimeout (-> Exercises.endExecution()), 500
    nextStep()

  interpreterApi: (interpreter, scope ) ->
    #wrapper = (text) ->
      #text = (if text then text.toString() else "")
      #interpreter.createPrimitive Maze

    interpreter.setProperty scope, "Maze", interpreter.createPrimitive(Maze)
    interpreter.setProperty scope, "moveLeft", interpreter.createPrimitive(Maze.moveLeft())
    #interpreter.setProperty scope, "alert", interpreter.createNativeFunction(wrapper)
    return

  # taking stuff from jqdnr plugin
  # continue if this seems to be the way to do it...
  #makeCodeAreaResizable: ->
    #events =
      #drag: (v) ->
        #E.css width: Math.max(v.pageX - M.pX + M.W, 0)
        ##height: Math.max(v.pageY - M.pY + M.H, 0)
        #false

      #stop: ->
        #$(window).unbind("mousemove", J.drag).unbind "mouseup", J.stop
        #return

    #h.bind "mousedown", e: e, k: k, (v) ->
      #d = v.data
      #p = {}
      #E = d.e
      #M =
        #X: p.left or f("left") or 0
        #Y: p.top or f("top") or 0
        #W: f("width") or E[0].scrollWidth or 0
        #H: f("height") or E[0].scrollHeight or 0
        #pX: v.pageX
        #pY: v.pageY
        #k: d.k
        #o: E.css("opacity")

      #$(window).mousemove($.jqDnR.drag).mouseup $.jqDnR.stop
      #false

