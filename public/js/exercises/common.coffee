@Exercises =
  currentExercise: null
  currentLevel: null
  currentName: null
  currentID: null
  hasSolution: false
  isLastLevel: false
  manualEvaluation: false
  isExecuting: false
  resizeCodeAreaUp: true
  completedLevel: false
  preloadBlocklyBlocks: false
  activeBlock: null
  automaticallyEndExecution: true
  executionCount: 0

  init: ->
    $.get "/blockly/toolboxes/" + Exercises.currentID + ".xml", (response) ->
      blocklyToolboxElem = response.getElementById("toolbox")
      Stage.init()
      Exercises.currentExercise.init Exercises.currentLevel
      Exercises.afterInitialLevelSetup()
      Exercises.initBlockly(blocklyToolboxElem)
      Exercises.isLastLevel = true if Exercises.currentLevel is Exercises.currentExercise.levelCount
      setTimeout (-> Stage.drawCoordinateGrid() ), 100
    $ ->
      tourStartedData = Helpers.retrieveValues('tourStarted')
      unless tourStartedData[Exercises.currentID]
        JediMaster.startTour()
        tourStartedData[Exercises.currentID] = true
        Helpers.storeValues('tourStarted', tourStartedData)
      # use some condition to start the joyride
      # (not shown yet for example)
      # and also allow it to be started from a button
      #JediMaster.startTour()
      windowWidth = $(window).width()
      #$(".overlay-resize").css width: windowWidth - 650
      if windowWidth < 750 + 650
      then $(".overlay-resize").css width: 750
      else $(".overlay-resize").css width: windowWidth - 650
      $("#help-btn a").click (e) ->
        if $("#exercise-help:visible").length is 0
        then JediMaster.exerciseHelpPopoverShow(@)
        else JediMaster.exerciseHelpPopoverHide(@)
        e.stopPropagation()
      $("body").click ->
        JediMaster.exerciseHelpPopoverHide(@)
      $("#reset-code-btn a").click ->
        Exercises.resetCodeArea()
      $("#start-execution-btn a").click ->
        Exercises.runCode()
      $("#end-execution-btn a").click ->
        Exercises.endExecution("nodialog")
      $(window).resize _.debounce(->
        Exercises.resizeCodeArea()
      , 500)
      $(".overlay-resize").jqResize ".resize-handle"
      Exercises.setCompletedLevels()

  resetCodeArea: ->
    return unless confirm "Tämä poistaa nykyisen koodisi. Haluatko jatkaa?"
    url = window.location.href.split("#")[0]
    window.localStorage[url] = null
    $.each Blockly.mainWorkspace.getAllBlocks(), (-> @dispose())
    @preloadBlocks() if @preloadBlocklyBlocks

  runBeforeExecution: (-> return)

  afterInitialLevelSetup: ->
    Exercises.runBeforeExecution = ->
      if Exercises.manualEvaluation
        if Exercises.executionCount is 0
          $("#evaluate-btn").show()
          $("#evaluate-btn").click (-> JediMaster.evaluateDialog() )
          $(document).foundation('tooltip', 'reflow');

  initBlockly: (blocklyToolboxElem) ->
    Blockly.inject document.getElementById("blockly"),
      path: "/vendor/blockly/"
      toolbox: blocklyToolboxElem
      scrollbars: true
      sounds: false
      trashcan: true

    url = window.location.href.split("#")[0]
    # needs logic for reseting the default blocks
    hasLocalStorage = "localStorage" of window
    if hasLocalStorage and window.localStorage[url]
      blocklyXML = window.localStorage[url]
      try savedBlocklyElementCount = $($.parseXML(blocklyXML)).children().children().length
      catch e then savedBlocklyElementCount = 0
      if savedBlocklyElementCount > 0
        window.setTimeout BlocklyStorage.restoreBlocks, 0
      else
        @preloadBlocks() if @preloadBlocklyBlocks
    else
      @preloadBlocks() if @preloadBlocklyBlocks
    BlocklyStorage.backupOnUnload()

    btb = $(".blocklyToolboxDiv")
    tbf = $("<div id='toolbox-filler' />")
    tbf.css("top",btb.height()).css("width",btb.width())
    $("#blockly").append(tbf)

  preloadBlocks: ->
    $.get("/blockly/codeareas/"+@currentID+".xml", (response) ->
      xml = Blockly.Xml.textToDom(response);
      Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
    , "text")

  resizeCodeArea: ->
    windowWidth = $(window).width()
    newWidth = switch
      when Exercises.isExecuting or windowWidth > (750+650) then windowWidth-650
      else 750 if Exercises.resizeCodeAreaUp
    newWidth = 230 if newWidth < 230
    $(".overlay-resize").animate(width: newWidth);

  endExecution: (method) ->
    $("#end-execution-btn").hide()
    $("#start-execution-btn").show()
    Exercises.isExecuting = false
    Exercises.resizeCodeArea()
    Errors.collected = []
    Exercises.interpreter.stateStack = [] if Exercises.interpreter?
    if method is "nodialog"
      Stage.reset()
      Exercises.currentExercise.levelSetup()
    else
      JediMaster.retryDialog ->
        Stage.reset()
        Exercises.currentExercise.levelSetup()

  runCode: ->
    @runBeforeExecution()
    $("#end-execution-btn").show()
    $("#start-execution-btn").hide()
    @isExecuting = true
    @executionCount++
    @resizeCodeArea()
    @readableCode = Blockly.JavaScript.workspaceToCode()
    if Errors.collected.length is 0
      Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.JavaScript.addReservedWords('highlightBlock');
      Blockly.mainWorkspace.traceOn(true);
      Blockly.mainWorkspace.highlightBlock(null);
      @interpretableCode = Blockly.JavaScript.workspaceToCode()
      @interpreter = new Interpreter(@interpretableCode, @currentExercise.interpreterApi)
      @interpreter.initGlobalScope(@interpreter.getScope());
      #console.log @readableCode
      nextStep = ->
        return unless Exercises.isExecuting
        #BlocklyInterface.highlight(action[1]);
        if Exercises.interpreter.step()
          # make it so only highlights delay the execution
          # also make loops delay less
          if Exercises.interpreter.stateStack[0]?
          then nextNode = Exercises.interpreter.stateStack[0].node
          else nextNode = null
          to = 0
          if nextNode && nextNode.name == "highlightBlock"
            isShort = true if Exercises.activeBlock && Exercises.activeBlock.type == "controls_repeat_ext"
            to = if isShort then 50 else 300
          window.setTimeout nextStep, to
          issl = Exercises.interpreter.stateStack.length
        else
          setTimeout ->
            return if Exercises.completedLevel and not Exercises.automaticallyEndExecution
            if Exercises.currentExercise.evaluate()
              JediMaster.successDialog()
              $(".joyride-close-tip").one 'click', ->
                Exercises.endExecution("nodialog")
              Exercises.markCompleted()
            else
              if Exercises.automaticallyEndExecution
                Exercises.endExecution()
          , 1000
          # the execution state should be emphasized, since we won't
          # stop it automatically anymore
          #setTimeout (-> Exercises.endExecution()), 500
      nextStep()
    else
      Errors.report()
      Exercises.endExecution("nodialog")

  markCompleted: (id) ->
    id = @currentID unless id
    completed = Helpers.retrieveValues('completedLevels')
    completed[id] = true
    Helpers.storeValues('completedLevels',completed)
    Exercises.setCompletedLevels()

  setCompletedLevels: ->
    completedStar = "<div class='completed-star'><img src='/img/star.png' /></div>"
    completed = Helpers.retrieveValues('completedLevels')
    $.each completed, (k,v) ->
      $("#"+k+"_link").append(completedStar)
      Exercises.completedLevel = true if Exercises.currentID is k

   openLastCategory: ->
    e = Blockly.mainWorkspace.toolbox_.tree_.lastChild_
    e.onMouseDown() unless e.isSelected()

   openFirstCategory: ->
    e = Blockly.mainWorkspace.toolbox_.tree_.firstChild_
    e.onMouseDown() unless e.isSelected()

  nextLevelPath: ->
    return "/harjoitukset/"+@currentName+"/"+(@currentLevel+1)

  simplifyInterpreterObject: (obj) ->
    simple = {}
    $.each obj.properties, ((k,v) -> simple[k] = v.data)
    return simple

  commonErrors: (id,data) ->
    err = null
    if id is "createBall_null"
      for k, v of data.values
        err = "Kaikkia arvoja ei ole annettu" if v.data is null
    return err

  commonInterpreterApi: (interpreter, scope) ->
    wrapper = (id) ->
      console.log(id)
    interpreter.setProperty scope, "notify", interpreter.createNativeFunction(wrapper)

    wrapper = (textobject) ->
      text = if textobject? and textobject.data? then textobject.data else ""
      return interpreter.createPrimitive prompt(text)
    interpreter.setProperty scope, "prompt", interpreter.createNativeFunction(wrapper)

    wrapper = (textobject,props) ->
      text = if textobject? and textobject.data? then textobject.data else ""
      props = if props? and props.data then $.parseJSON props.data else {}
      Api.createText(text,props)
    interpreter.setProperty scope, "createText", interpreter.createNativeFunction(wrapper)

    wrapper = (po) ->
      Errors.collect('createBall_null', {values: po.properties, block: Exercises.activeBlock})
      if Errors.collected.length is 0
        Errors.collect('createBall_undefined', {values: po.properties, block: Exercises.activeBlock})
        if Errors.collected.length is 0
          props = Exercises.simplifyInterpreterObject(po)
          Api.createBall(props)

      Errors.report()
      # we could check for errors here...
      #else
        #msg = 'En tiedä pallon halkaisijaa. Olethan asettanut sille jonkin arvon?'
        #modalPos = JediMaster.calculatePositionByBlock(Exercises.activeBlock)
        #JediMaster.pointModalWithGuidance(msg, modalPos)
        #Exercises.endExecution("nodialog")
    interpreter.setProperty scope, "createBall", interpreter.createNativeFunction(wrapper)

    wrapper = (elem,callback) ->
      Api.onClick(elem.data,callback,interpreter,scope)
    interpreter.setProperty scope, "onClick", interpreter.createNativeFunction(wrapper)

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

