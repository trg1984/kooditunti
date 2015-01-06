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

  createBall: (props) ->
    # validate or set defaults here
    radius =  if props.radius? then Helpers.epValidate('radius', props.radius) else 50
    position = if props.position? then Helpers.epValidate('position', props.position) else [1,1]
    Stage.createElement(props.name,position,{type: 'circle', radius: radius, settable: true})

  onClick: (elem, callback, intrp, scope) ->
    $('#viewport').on 'click', (event) ->
      body = Stage.findClickTarget(@,event,elem)
      if body
        intrp.stateStack.unshift({node: callback.node.body, scope: scope})
        intrp.run()
