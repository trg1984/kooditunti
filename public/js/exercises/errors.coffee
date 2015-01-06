@Errors =
  collected: []
  collect: (id,data) ->
    if Exercises.currentExercise.errorCollector
      error = Exercises.currentExercise.errorCollector(id,data)
    @collected.push {msg:error,block:data.block} if error? and error

  report: ->
    $.each @collected, (i,v) ->
      modalPos = JediMaster.calculatePositionByBlock(v.block)
      JediMaster.pointModalWithGuidance(v.msg, modalPos)
