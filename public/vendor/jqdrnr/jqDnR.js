/*
 * jqDnR - Minimalistic Drag'n'Resize for jQuery.
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * $Version: 2007.08.19 +r2
 */

(function($) {
  $.fn.jqResize = function(h) {
    return i(this, h, 'r');
  };
  $.jqDnR = {
    dnr: {},
    e: 0,
    drag: function(v) {
      E.css({
        width: Math.max(v.pageX - M.pX + M.W, 0),
        //height: Math.max(v.pageY - M.pY + M.H, 0)
      });
      return false;
    },
    stop: function() {
      $(window).unbind('mousemove', J.drag).unbind('mouseup', J.stop);
      Exercises.resizeCodeAreaUp = false
    }
  };
  var J = $.jqDnR,
  M = J.dnr,
  E = J.e,
  i = function(e, h, k) {
    return e.each(function() {
      h = (h) ? $(h, e) : e;
      h.bind('mousedown', {
        e: e,
        k: k
      }, function(v) {
        var d = v.data,
        p = {};
        E = d.e;
        M = {
          X: p.left || f('left') || 0,
          Y: p.top || f('top') || 0,
          W: f('width') || E[0].scrollWidth || 0,
          H: f('height') || E[0].scrollHeight || 0,
          pX: v.pageX,
          pY: v.pageY,
          k: d.k,
          o: E.css('opacity')
        };
        $(window).mousemove($.jqDnR.drag).mouseup($.jqDnR.stop);
        return false;
      });
    });
  },
  f = function(k) {
    return parseInt(E.css(k)) || false;
  };
})(jQuery);
