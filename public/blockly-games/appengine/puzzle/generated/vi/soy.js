// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">Con vịt</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Lông vịt</span><span id="Puzzle_animal1Trait2">Mỏ</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Con mèo</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Ria mép</span><span id="Puzzle_animal2Trait2">Lông mèo</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Con ong</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mật ong</span><span id="Puzzle_animal3Trait2">Ong đốt</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Ốc sên</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Vỏ ốc</span><span id="Puzzle_animal4Trait2">Da nhờn</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">hình ảnh:</span><span id="Puzzle_legs">chân:</span><span id="Puzzle_legsChoose">chọn...</span><span id="Puzzle_traits">đặc điểm:</span><span id="Puzzle_error0">Rất hoàn chỉnh!\nTất cả %1 mảnh đều chính xác.</span><span id="Puzzle_error1">Gần đúng rồi! Một mảnh còn chưa chính xác.</span><span id="Puzzle_error2">%1 mảnh còn chưa chính xác.</span><span id="Puzzle_tryAgain">Các mảnh được đánh dấu là không đúng.\nCố lên!</span></div>';
};


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: 'Đố vui'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Trợ giúp</button>&nbsp;<button id="checkButton" class="primary">Kiểm tra đáp án</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Với mỗi con vật (màu xanh lá cây), hãy gắn vào hình ảnh đúng với mỗi con vật đó, chọn số chân của chúng, và gắn đặc điểm thích hợp của chúng.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Puzzle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
