@Survey =
  id: null
  data: {}
  step: 0
  stepClass: null
  stepElem: null

  init: (id) ->
    @id = id
    @step = 1
    @retrieveValues(id)
    @saveStepReference $('.step.current')
    @fixHeight()
    $(window).resize -> Survey.fixHeight()
    #@data = {'q1':['opt1','opt2']}
    $(".step").each ->
      stepE = $(@)
      Survey.initValues stepE
      Survey.toggleStepInitiator stepE
      unless stepE.hasClass('step1')
        stepE.addClass('next').hide()
        setTimeout (-> stepE.show()), 500
    $(".step .val").change ->
      Survey.saveValues $(@)
    # TEMPTEMPTEMPTEMP
    $(".step .range").click ->
      $(@).addClass("set") unless $(@).hasClass("set")
      Survey.saveValues $(@)
    # TEMPTEMPTEMPTEMP
    $(".step a.prev").click ->
      Survey.stepBackward()
    $(".step button.next").click ->
      Survey.stepForward()

  saveStepReference: (stepElem) ->
    @stepClass = stepElem.attr('class').split(' ').pop()
    @stepElem = stepElem

  initValues: (stepElem) ->
    key = stepElem.attr('data-key')
    values = Survey.data[key]
    if values
      $.each values, (i,v) ->
        stepElem.find('[data-value='+v+']')
          .find('input').attr('checked',true)

  saveValues: (initiator) ->
    key = @stepElem.data('key')
    value = initiator.data('value')
    allowMultiple = !(initiator.find("input[type='radio']").length > 0)
    if @data[key] && allowMultiple
      existingIndex = $.inArray value, @data[key]
      if existingIndex is -1
      then @data[key].push value
      else @data[key].splice existingIndex, 1
    else
      @data[key] = [value]

    @toggleStepInitiator @stepElem
    @storeValues()

  stepBackward: ->
    @stepElem.removeClass('current').addClass('next')
    @stepElem.prev().addClass('current')
    @saveStepReference $('.step.current')

  stepForward: ->
    @stepElem.removeClass('current')
    @stepElem.next().removeClass('next').addClass('current')
    @saveStepReference $('.step.current')

  toggleStepInitiator: (stepElem) ->
    hasSelected = true if stepElem.find('input:checked').length > 0
    # TEMPTEMPTEMPTEMP
    hasSelected = true if stepElem.find('.range.set').length > 0
    # TEMPTEMPTEMPTEMP
    if hasSelected
    then stepElem.find('.actions').fadeIn('fast')
    else stepElem.find('.actions').fadeOut('fast')

  fixHeight: ->
    $("#steps-wrapper").height($(window).height()-30)

  storeValues: ->
    toStore = JSON.stringify(@data)
    localStorage.setItem(@id,toStore)

  retrieveValues: ->
    stored = localStorage.getItem(@id)
    @data = JSON.parse(stored) if stored
