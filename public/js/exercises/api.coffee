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

  createBall: (name,props) ->
    # set defaults here
    radius = if props.radius? and props.radius isnt "" then props.radius else 50
    position = if props.position? then props.position else [1,1]
    Stage.createElement(name,position,{type: 'circle', radius: radius, settable: true})

  onClick: (elem, callback, intrp, scope) ->
    $('#viewport').on 'click', (event) ->
      body = Stage.findClickTarget(@,event,elem)
      if body
        intrp.stateStack.unshift({node: callback.node.body, scope: scope})
        intrp.run()
