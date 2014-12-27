@Exercises =
  currentExercise: null
  isExecuting: false
  resizeCodeAreaUp: true
  filenameFormat: null
  preloadBlocklyBlocks: false
  activeBlock: null

  initBlockly: ->
    Blockly.inject document.getElementById("blockly"),
      path: "/vendor/blockly/"
      toolbox: blocklyToolboxElem
      scrollbars: true
      sounds: false
      trashcan: false

    url = window.location.href.split("#")[0]
    # needs logic for reseting the default blocks
    hasLocalStorage = "localStorage" of window
    if hasLocalStorage and window.localStorage[url]
      window.setTimeout BlocklyStorage.restoreBlocks, 0
    else
      # load the default blocks if we haven't done anything yet
      # (no local storage)
      @preloadBlocks() if @preloadBlocklyBlocks
    BlocklyStorage.backupOnUnload()

  preloadBlocks: ->
    $.get("/blockly/codeareas/"+@filenameFormat+".xml", (response) ->
      xml = Blockly.Xml.textToDom(response);
      Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
    , "text")

  resizeCodeArea: ->
    windowWidth = $(window).width()
    newWidth = switch
      when Exercises.isExecuting or windowWidth > 1450 then windowWidth-650
      else 800 if Exercises.resizeCodeAreaUp
    $(".overlay-resize").animate(width: newWidth);

  endExecution: ->
    $("#end-execution-btn").hide()
    $("#start-execution-btn").show()
    Exercises.isExecuting = false
    Exercises.resizeCodeArea()
    if Exercises.currentExercise.evaluate()
      # woohoo we have passed the level
      # get info for prompts on DOM
      # and move on or something...
    else
      # no luck, try again? (dialog texts from DOM)
      #alert("Yritä uudelleen")
      Stage.reset()
      Exercises.currentExercise.levelSetup()

  runCode: ->
    $("#end-execution-btn").show()
    $("#start-execution-btn").hide()
    Exercises.isExecuting = true
    Exercises.resizeCodeArea()
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    Blockly.mainWorkspace.traceOn(true);
    Blockly.mainWorkspace.highlightBlock(null);
    code = Blockly.JavaScript.workspaceToCode()
    console.log(code)
    intrp = new Interpreter(code, @currentExercise.interpreterApi)
    #intrp.initGlobalScope()
    nextStep = ->
      #BlocklyInterface.highlight(action[1]);
      if intrp.step()
        window.setTimeout nextStep, 20
      else
        # the execution state should be emphasized, since we won't
        # stop it automatically anymore
        #setTimeout (-> Exercises.endExecution()), 500
    nextStep()

  commonInterpreterApi: (interpreter, scope) ->
    wrapper = (id) ->
      console.log(id)
    interpreter.setProperty scope, "notify", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      id = (if id then id.toString() else "")
      Exercises.activeBlock = Blockly.mainWorkspace.getBlockById(id)
      interpreter.createPrimitive Blockly.mainWorkspace.highlightBlock(id)
    interpreter.setProperty scope, "highlightBlock", interpreter.createNativeFunction(wrapper)


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

