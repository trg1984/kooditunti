# leverages HopScotch (or Intro.js) or joyride
@JediMaster =
  initDone: false
  init: ->
    initDone = true
    $(document).foundation joyride:
      post_step_callback: (i, step) ->
        JediMaster.hideModal step
        return
      post_ride_callback: ->
        $(".exercise-tip-placement").hide()

  startTour: ->
    @init() unless @initDone
    $(".exercise-tip-placement").show()
    $(document).foundation('joyride', 'start');

  pointModalWithGuidance: (msg,pos) ->
    #$(document).foundation('joyride', 'start');
    jrtg = '<div id="guide-modal" class="joyride-tip-guide"'
    jrtg+= 'data-index="0" style="visibility: visible; display: block;'
    jrtg+= 'top: '+pos[1]+'px; left: '+pos[0]+'px;">'
    jrtg+= '<span class="joyride-nub left"></span><div class="joyride-content-wrapper">'
    jrtg+= '<p>'+msg+'</p>'
    jrtg+= '<a href="#" class="small button joyride-next-tip-custom close-btn">Sulje</a><a href="#close" class="joyride-close-tip close-btn">×</a></div></div>'
    $('body').append(jrtg)
    $("#guide-modal .close-btn").click ->
      $("#guide-modal").remove()

  retryDialog: (cb) ->
    jrtg = '<div id="guide-modal" class="joyride-tip-guide" data-index="0" style="visibility: visible; display: block; width: 375px;">'
    jrtg+= '<div class="joyride-content-wrapper" style="text-align: center;">'
    jrtg+= '<div style="width: 165px;overflow: hidden; margin: 0px auto;">'
    jrtg+= '</div><p style="font-size:25px;">Harmi, tehtävä ei mennyt läpi.</p>'
    jrtg+= '<a href="#" style="margin-right:5px" class="small button joyride-next-tip close-btn">Jatka yrittämistä</a>'
    jrtg+= '<a href="#close" class="joyride-close-tip-custom close-btn">×</a></div></div>'
    jrtg+= '<div class="joyride-modal-bg" style="display: block;"></div>'
    $('body').append(jrtg)
    gm = $("#guide-modal")
    gm.css("left",($(window).width()/2)-(gm.width()/2))
    gm.css("top",($(window).height()/2)-(gm.height()/2))
    $("#guide-modal .close-btn").click ->
      $("#guide-modal").remove()
      $(".joyride-modal-bg").remove()
      cb()

  successDialog: ->
    jrtg = '<div id="guide-modal" class="success-dialog joyride-tip-guide" data-index="0" style="visibility: visible; display: block; width: 375px;">'
    jrtg+= '<div class="joyride-content-wrapper" style="text-align: center;">'
    jrtg+= '<div style="width: 165px;overflow: hidden; margin: 0px auto;">'
    jrtg+= '<div class="animated tada" style="width:30%;float:left;margin-top:15px;"><img src="http://www.webweaver.nu/clipart/img/nature/planets/3d-yellow-star.png"></div>'
    jrtg+= '<div class="animated tada" style="width:40%;float:left;"><img src="http://www.webweaver.nu/clipart/img/nature/planets/3d-yellow-star.png"></div>'
    jrtg+= '<div class="animated tada" style="width:30%;float:left;margin-top:15px;"><img src="http://www.webweaver.nu/clipart/img/nature/planets/3d-yellow-star.png"></div>'
    jrtg+= '</div><p style="font-size:25px;">Hienoa, ratkaisit tehtävän!</p>'
    if Exercises.isLastLevel
      btnText = "Palaa harjoitusvalikkoon"
      btnHref = "/harjoitukset"
    else
      btnText = "Siirry seuraavaan tehtävään"
      btnHref = Exercises.nextLevelPath()
    jrtg+= '<a href="'+btnHref+'" class="small button joyride-next-tip-custom close-btn">'+btnText+'</a>'
    jrtg+= '<a href="#close" class="joyride-close-tip close-btn">×</a></div></div>'
    jrtg+= '<div class="joyride-modal-bg" style="display: block;"></div>'
    $('body').append(jrtg)
    gm = $("#guide-modal")
    gm.css("left",($(window).width()/2)-(gm.width()/2))
    gm.css("top",($(window).height()/2)-(gm.height()/2))
    $("#guide-modal .close-btn").click ->
      $("#guide-modal").remove()
      $(".joyride-modal-bg").remove()

  evaluateDialog: ->
    jrtg = '<div id="guide-modal" class="joyride-tip-guide evaluation-dialog" data-index="0" style="visibility: visible; display: block; width: 375px;">'
    jrtg+= '<div class="joyride-content-wrapper">'
    jrtg+= '<div class="evaluation-selects-wrapper"></div>'
    jrtg+= '<a href="#close" class="joyride-close-tip-custom close-btn">×</a></div></div>'
    jrtg+= '<div class="joyride-modal-bg" style="display: block;"></div>'
    $('body').append(jrtg)
    gm = $("#guide-modal")
    gmEvlSelW = gm.find('.evaluation-selects-wrapper')
    $('#evaluation-selects').find('div').each ->
      evlRow = $("<div class='evaluation-row' />").append $('<span />').text($(@).text())
      evlSel = $("<select />")
      evlSel.append $('<option value="empty" />').text('')
      evlSel.append $('<option value="yes" />').text("Kyllä, mielestäni tämä pitää paikkansa.")
      evlSel.append $('<option value="no" />').text("Hups! Jatkan vielä tehtävän tekemistä.")
      evlRow.append evlSel
      gmEvlSelW.append evlRow

    firstRow = gmEvlSelW.find('.evaluation-row:first')
    firstRow.addClass("active")
    checkForCompletion = ->
      isComplete = true
      gmEvlSelW.find('select').each ->
        isComplete = false if @value isnt "yes"
      return isComplete

    changeAction = (e) ->
      isComplete = checkForCompletion()
      isNo = e.value is "no"
      JediMaster.closeDialog() if isNo or isComplete
      if isComplete
        JediMaster.successDialog()
        Exercises.markCompleted()
      return if isNo or isComplete
      next = $(e).parent().next()
      next.addClass("active") unless next.hasClass("active")

    gmEvlSelW.find('select').change (-> changeAction(@) )

    gm.css("left",($(window).width()/2)-(gm.width()/2))
    gm.css("top",($(window).height()/2)-(gm.height()/2))
    $("#guide-modal .close-btn").click ->
      JediMaster.closeDialog()

  closeDialog: ->
    $("#guide-modal").remove()
    $(".joyride-modal-bg").remove()

  calculatePositionByBlock: (block) ->
    blockBB = block.svg_.svgGroup_.getBoundingClientRect()
    modalX = blockBB.left + blockBB.width + 20
    modalY = blockBB.top
    return [modalX, modalY]

  hideModal: (step) ->
    $(".joyride-modal-bg").hide() if step.hasClass('hide-modal-next')

    #de = $("<div id='"+id+"' class='dummy' />")
    #de.css('width',100)
    #de.css('height',100)
    #de.css('left',x)
    #de.css('top',y)
    #$('body').append de

    #jr = $('<ol data-joyride />')
    #step1 = $("<div data-id='"+id+"' />")
    #step1.text("Testing")
    #jr.append step1
    #$('body').append jr

    #$(document).foundation('joyride', 'reflow')
    #$(document).foundation('joyride', 'start')

