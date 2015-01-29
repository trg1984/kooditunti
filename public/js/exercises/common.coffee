@Exercises =
  currentExercise: null
  currentLevel: null
  currentName: null
  currentPathName: null
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

  resetCodeArea: (ctrl) ->
    if ctrl != "noprompt"
      return unless confirm "Tämä poistaa nykyisen koodisi. Haluatko jatkaa?"
    window.localStorage[@currentID+"_code"] = null
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

    $("#blockly").width($("#blockly").width()-2)
    codeStorageID = @currentID+"_code"
    hasLocalStorage = "localStorage" of window
    if hasLocalStorage and window.localStorage[codeStorageID]
      blocklyXML = window.localStorage[codeStorageID]
      try savedBlocklyElementCount = $($.parseXML(blocklyXML)).children().children().length
      catch e then savedBlocklyElementCount = 0
      if savedBlocklyElementCount > 0
        window.setTimeout BlocklyStorage.restoreBlocks, 0
      else
        @preloadBlocks() if @preloadBlocklyBlocks
    else
      @preloadBlocks() if @preloadBlocklyBlocks
    BlocklyStorage.backupOnUnload(codeStorageID)

    # create filler for toolbox (with categories)
    btb = $(".blocklyToolboxDiv")
    tbf = $("<div id='toolbox-filler' />")
    tbf.css("top",btb.height()).css("width",btb.width())
    $("#blockly").append(tbf)

    # push code-display according to toolbox (or flyout)
    #blocklyFlyoutBackground
    if Blockly.mainWorkspace.flyout_?
      fow = Blockly.mainWorkspace.flyout_.width_
      $("#code-display").css("margin-left",fow+30)
    else
      tboxw = $('.blocklyToolboxDiv').width()
      $("#code-display").css("margin-left",tboxw+30)

    updateCodeDisplay = ->
      Blockly.JavaScript.STATEMENT_PREFIX = '';
      Exercises.readableCode = Blockly.JavaScript.workspaceToCode()
      $("#code-display").html(Exercises.readableCodeHTML())
    #Blockly.BlockSvg.mouseUpCallback = () ->
      #updateCodeDisplay()
    $('body').on 'mouseup', ->
      updateCodeDisplay()
    setTimeout (-> updateCodeDisplay()), 200

    Blockly.BlockSvg.doubleClickCallback = (block) ->
      bcds = localStorage.getItem('block_collapse_disclaimer_shown')
      JediMaster.blockCollapseDisclaimer(block) unless bcds?
      localStorage.setItem('block_collapse_disclaimer_shown',true)

  preloadBlocks: ->
    $.get("/blockly/codeareas/"+@currentID+".xml", (response) ->
      xml = Blockly.Xml.textToDom(response);
      Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
    , "text")

  hideAllBlocks: ->
    for block in Blockly.mainWorkspace.getAllBlocks()
      if block.outputConnection == null
        block.setCollapsed true

  showAllBlocks: ->
    for block in Blockly.mainWorkspace.getAllBlocks()
      if block.outputConnection == null
        block.setCollapsed false

  resizeCodeArea: ->
    windowWidth = $(window).width()
    newWidth = switch
      when Exercises.isExecuting or windowWidth > (750+650) then windowWidth-650
      else 750 if Exercises.resizeCodeAreaUp
    newWidth = 230 if newWidth < 230
    $(".overlay-resize").animate width: newWidth, ->
      $(window).trigger('resize.fndtn.joyride')

  endExecution: (method) ->
    return unless @isExecuting
    $("#end-execution-btn").hide()
    $("#start-execution-btn").show()
    @isExecuting = false
    @resizeCodeArea()
    Errors.collected = []
    Blockly.JavaScript.STATEMENT_PREFIX = '';
    @interpreter.stateStack = [] if @interpreter?
    if method is "nodialog"
      Stage.reset()
      @currentExercise.levelSetup()
    else
      JediMaster.retryDialog ->
        Stage.reset()
        Exercises.currentExercise.levelSetup()

  runCode: ->
    return if JediMaster.onTour
    @runBeforeExecution()
    $("#end-execution-btn").show()
    $("#start-execution-btn").hide()
    @isExecuting = true
    @executionCount++
    @resizeCodeArea()
    @readableCode = Blockly.JavaScript.workspaceToCode()
    $("#code-display").html(@readableCodeHTML())
    #console.log @readableCode
    if Errors.collected.length is 0
      Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.JavaScript.addReservedWords('highlightBlock');
      Blockly.mainWorkspace.traceOn(true);
      Blockly.mainWorkspace.highlightBlock(null);
      @interpretableCode = Blockly.JavaScript.workspaceToCode()
      @interpreter = new Interpreter(@interpretableCode, @currentExercise.interpreterApi)
      @interpreter.initGlobalScope(@interpreter.getScope());
      #console.log @readableCode
      #Exercises.interpreter.run()
      #return
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
            #to = 0
          window.setTimeout nextStep, to
          issl = Exercises.interpreter.stateStack.length
        else
          setTimeout ->
            return if Exercises.completedLevel# and not Exercises.automaticallyEndExecution
            if Exercises.currentExercise.evaluate()
              JediMaster.successDialog()
              $(".joyride-close-tip").one 'click', ->
                Exercises.endExecution("nodialog")
              Exercises.markCompleted()
            else
              if Exercises.automaticallyEndExecution
                if Exercises.manualEvaluation# and not Exercises.completedLevel
                then Exercises.endExecution("nodialog")
                else Exercises.endExecution()
          , 1000
          # the execution state should be emphasized, since we won't
          # stop it automatically anymore
          #setTimeout (-> Exercises.endExecution()), 500
      #
      if Exercises.currentName is "playground"
      then Exercises.interpreter.run()
      else nextStep()
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

   closeFirstCategory: ->
    e = Blockly.mainWorkspace.toolbox_.tree_.firstChild_
    e.onMouseDown() if e.isSelected()

  hideBubbles: ->
    for block in Blockly.mainWorkspace.getAllBlocks()
      hasMutator = block.mutator?
      isOpen = if hasMutator then Blockly.Icon.prototype.isVisible.call(block.mutator) else false
      block.mutator.iconClick_() if hasMutator && isOpen

  nextLevelPath: ->
    return "/harjoitukset/"+@currentPathName+"/"+(@currentLevel+1)

  simplifyInterpreterObject: (obj) ->
    simple = {}
    for k, v of obj.properties
      if v.type is "object" # handles only arrays
        value_array = []
        for ok, ov of v.properties
          value_array.push ov.data
        simple[k] = value_array
      else
        simple[k] = v.data
    return simple

  commonErrors: (id,data) ->
    err = null
    if id is "createElement_null"
      for k, v of data.values
        err = "Kaikkia arvoja ei ole annettu" if v.data is null
    return err

  stageElement: (type,posX,posY,props) ->
    # these are mostly common, but can be overwritten by the exercise
    if @currentExercise.stageElement?
      return @currentExercise.stageElement(type,posX,posY,props)
    else
      return switch type
        when 'circle' then Physics.body 'circle',
          # make them scatter just a bit (makes sense when we create many)
          x: (posX+Stage.blockWidth/2)+Math.random()
          y: (posY+Stage.blockHeight/2)+1 # y-coordinate
          vx: props.xy # velocity in x-direction
          vy: props.vy # velocity in y-direction
          radius: props.radius
        when 'rectangle' then Physics.body 'rectangle',
          # make them scatter just a bit (makes sense when we create many)
          x: (posX+Stage.blockWidth/2)+Math.random()
          y: (posY+Stage.blockHeight/2)+1 # y-coordinate
          vx: props.xy # velocity in x-direction
          vy: props.vy # velocity in y-direction
          width: props.width
          height: props.height
          restitution: 0.1

  readableCodeHTML: ->
    o = @readableCode
    o = o.replace(/(\n){3,}/gim,'<br /><br />')
    o = o.replace(/(\n)/gm,'<br />')
    o = o.replace(/(  )/gm,'&nbsp;&nbsp;')
    o = o.replace(/(,'{}')/gm,'')
    return o

  commonInterpreterApi: (interpreter, scope) ->
    #wrapper = (id) ->
      #console.log(id)
    #interpreter.setProperty scope, "notify", interpreter.createNativeFunction(wrapper)

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
      Errors.collect('createElement_null', {values: po.properties, block: Exercises.activeBlock})
      if Errors.collected.length is 0
        Errors.collect('createElement_undefined', {values: po.properties, block: Exercises.activeBlock})
        Errors.collect('createElement_type_error', {values: po.properties, block: Exercises.activeBlock})
        if Errors.collected.length is 0
          props = Exercises.simplifyInterpreterObject(po)
          Api.createElement(props)
      Errors.report()
    interpreter.setProperty scope, "createElement", interpreter.createNativeFunction(wrapper)

    wrapper = (element,po) ->
      element = element.data
      props = Exercises.simplifyInterpreterObject(po)
      Api.editElement(element,props)
    interpreter.setProperty scope, "editElement", interpreter.createNativeFunction(wrapper)

    wrapper = (elem,callback) ->
      Api.onClick(elem.data,callback,interpreter,scope)
    interpreter.setProperty scope, "onClick", interpreter.createNativeFunction(wrapper)

    wrapper = (key,callback) ->
      Api.onKeypress(key.data,callback,interpreter,scope)
    interpreter.setProperty scope, "onKeypress", interpreter.createNativeFunction(wrapper)

    wrapper = (id) ->
      id = (if id then id.toString() else "")
      Exercises.activeBlock = Blockly.mainWorkspace.getBlockById(id)
      interpreter.createPrimitive Blockly.mainWorkspace.highlightBlock(id)
    interpreter.setProperty scope, "highlightBlock", interpreter.createNativeFunction(wrapper)

    wrapper = (x,y) ->
      Stage.setGravity(x.data, y.data);
    interpreter.setProperty scope, "setGravity", interpreter.createNativeFunction(wrapper)

    wrapper = (name,property) ->
      prop = Api.getElementProperty(name.data, property.data);
      interpreter.createPrimitive prop
    interpreter.setProperty scope, "getElementProperty", interpreter.createNativeFunction(wrapper)

    # without this, loops won't work with interpreter when
    # state stack is manually filled (events do this).
    # probably a bug in JS-Interpreter.
    wrapper = (-> return)
    interpreter.setProperty scope, "count", interpreter.createNativeFunction(wrapper)


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

