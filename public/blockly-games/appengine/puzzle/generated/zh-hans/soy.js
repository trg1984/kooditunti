// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">鸭子</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">羽毛</span><span id="Puzzle_animal1Trait2">喙</span><span id="Puzzle_animal1HelpUrl">https://zh.wikipedia.org/wiki/鸭</span><span id="Puzzle_animal2">猫</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">胡须</span><span id="Puzzle_animal2Trait2">毛皮</span><span id="Puzzle_animal2HelpUrl">https://zh.wikipedia.org/wiki/猫</span><span id="Puzzle_animal3">蜜蜂</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">蜂蜜</span><span id="Puzzle_animal3Trait2">蜂刺</span><span id="Puzzle_animal3HelpUrl">https://zh.wikipedia.org/wiki/蜜蜂</span><span id="Puzzle_animal4">蜗牛</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">壳</span><span id="Puzzle_animal4Trait2">粘液</span><span id="Puzzle_animal4HelpUrl">https://zh.wikipedia.org/wiki/蜗牛</span><span id="Puzzle_picture">图片：</span><span id="Puzzle_legs">腿：</span><span id="Puzzle_legsChoose">请选择...</span><span id="Puzzle_traits">特征：</span><span id="Puzzle_error0">完美!\n所有共%1块都正确。</span><span id="Puzzle_error1">差不多了！还有一个块是不正确的。</span><span id="Puzzle_error2">%1 块不正确</span><span id="Puzzle_tryAgain">高亮块不正确，请重试。</span></div>';
};


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: '拼图'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">帮助</button>&nbsp;<button id="checkButton" class="primary">检查答案</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">为每个动物（绿色）加上它的图片、选择腿的数量并加入其拥有的特征。</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Puzzle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
