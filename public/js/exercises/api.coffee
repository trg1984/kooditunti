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
    props = ApiHelpers.validateElementProperties(props)
    # set required
    props.position = ApiHelpers.defaultPropertyValues.position unless props.position
    props.width = ApiHelpers.defaultPropertyValues.width unless props.width
    props.height = ApiHelpers.defaultPropertyValues.height unless props.height
    if props.type is "circle"
      props.radius = ApiHelpers.defaultPropertyValues.radius unless props.radius
    $.merge props, {settable: true}
    # REFACTOR: name and position as seperate argument bad
    Stage.createElement(props.name,props.position,props)

  editElement: (elementName,props) ->
    props = ApiHelpers.validateElementProperties(props)
    Stage.editElement(elementName,props)

  getElementProperty: (elementName,property) ->
    Stage.getElementProperty(elementName,property)

  onClick: (elem, callback, intrp, scope) ->
    $('#viewport').on 'click', (event) ->
      body = Stage.findClickTarget(@,event,elem)
      if body
        intrp.stateStack.unshift({node: callback.node.body, scope: scope, thisExpression: scope})
        intrp.run()

  onKeypress: (key, callback, intrp, scope) ->
    holdingKey = false
    Mousetrap.bind key, ->
      return if holdingKey
      holdingKey = true
      intrp.stateStack.unshift({node: callback.node.body, scope: scope, thisExpression: scope})
      intrp.run()
    Mousetrap.bind key, ->
      holdingKey = false
    , 'keyup'

  execWaitTime: 0
  addToExecQueue: (funct, seconds, intrp, scope) ->
    time = seconds * 1000
    Api.execWaitTime += time
    setTimeout (->
      intrp.stateStack.unshift({node: funct.node.body, scope: scope, thisExpression: scope})
      intrp.run()
      Api.execWaitTime -= time
      return
    ), Api.execWaitTime
    return
