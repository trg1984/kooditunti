@Errors =
  collected: []
  collect: (id,data) ->
    error = Exercises.commonErrors(id,data)
    if Exercises.currentExercise.errorCollector and !error?
      error = Exercises.currentExercise.errorCollector(id,data)
    @collected.push {msg:error,block:data.block} if error? and error

  report: ->
    $.each @collected, (i,v) ->
      modalPos = JediMaster.calculatePositionByBlock(v.block)
      JediMaster.pointModalWithGuidance(v.msg, modalPos)
      Exercises.endExecution("nodialog")
