# quick & dirty...
$("#exercises-link").click ->
  $(@).parent().parent().parent().find('a').removeClass("active")
  $(@).addClass("active")
  #
  $(".page").removeClass("prev").removeClass("next").removeClass("curr")
  #
  $("#info-page").addClass("next")
  $("#exercises-page").addClass("curr")

$("#info-link").click ->
  $(@).parent().parent().parent().find('a').removeClass("active")
  $(@).addClass("active")
  #
  $(".page").removeClass("prev").removeClass("next").removeClass("curr")
  #
  $("#exercises-page").addClass("prev")
  $("#info-page").addClass("curr")

resizePageWrapperToPageContentHeight = ->
  pageHeight = $('.page').outerHeight(true)
  $('#page-wrapper').height(pageHeight)

$(window).resize _.debounce(->
  resizePageWrapperToPageContentHeight()
, 500)
resizePageWrapperToPageContentHeight()
