@Api =
  createText: (text) ->
    Stage.textElements[0] = { text: text, alive: true }
