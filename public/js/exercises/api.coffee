@Api =
  createText: (text,props) ->
    pos = if props.position? then props.position else [1,1]
    pixPos = Stage.coordinatesToPixels(pos)
    newTextElem = { text: text, pos: pixPos, alive: true }
    textEdited = false
    $.each Stage.textElements, (i,v) ->
      # replace text on the same position
      if v.pos[0] is pixPos[0] and v.pos[1] is pixPos[1]
        Stage.textElements[i] = newTextElem
        textEdited = true
    Stage.textElements.push newTextElem unless textEdited

  createElement: (props) ->
    # validate or set defaults here
    radius =  if props.radius? then Helpers.epValidate('radius', props.radius) else 50
    width =  if props.width? then Helpers.epValidate('width', props.width) else 100
    height =  if props.height? then Helpers.epValidate('height', props.height) else 100
    position = if props.position? then Helpers.epValidate('position', props.position) else [1,1]
    type = if props.type? and props.type in ['circle','rectangle'] then props.type else 'circle'
    # REFACTOR: toooo much repetition...
    Stage.createElement(props.name,position,{type:type,height:height,width:width,radius:radius,settable:true})

  onClick: (elem, callback, intrp, scope) ->
    $('#viewport').on 'click', (event) ->
      body = Stage.findClickTarget(@,event,elem)
      if body
        intrp.stateStack.unshift({node: callback.node.body, scope: scope})
        intrp.run()
