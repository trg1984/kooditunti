# leverages HopScotch (or Intro.js) or joyride
@JediMaster =
  pointModalWithGuidance: (msg,pos) ->
    #$(document).foundation('joyride', 'start');
    jrtg = '<div id="guide-modal" class="joyride-tip-guide"'
    jrtg+= 'data-index="0" style="visibility: visible; display: block;'
    jrtg+= 'top: '+pos[1]+'px; left: '+pos[0]+'px;">'
    jrtg+= '<span class="joyride-nub left"></span><div class="joyride-content-wrapper">'
    jrtg+= '<p>'+msg+'</p>'
    jrtg+= '<a href="#" class="small button joyride-next-tip close-btn">Sulje</a><a href="#close" class="joyride-close-tip close-btn">×</a></div></div>'
    $('body').append(jrtg)
    $("#guide-modal .close-btn").click ->
      $("#guide-modal").remove()

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

