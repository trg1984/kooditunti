// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly 游戏</span><span id="Games_puzzle">拼图</span><span id="Games_maze">迷宫</span><span id="Games_bird">鸟</span><span id="Games_turtle">乌龟</span><span id="Games_movie">电影</span><span id="Games_pondBasic">池塘</span><span id="Games_pondAdvanced">JS池</span><span id="Games_linesOfCode1">您通过一行JavaScript通过了这个等级：</span><span id="Games_linesOfCode2">您通过%1行JavaScript通过了这个等级：</span><span id="Games_nextLevel">准备好等级%1了么?</span><span id="Games_finalLevel">您准备好下一个挑战了么？</span><span id="Games_linkTooltip">保存模块并生成链接。</span><span id="Games_runTooltip">运行您写的程序。</span><span id="Games_runProgram">运行程序</span><span id="Games_resetTooltip">停止运行程序并重置等级。</span><span id="Games_resetProgram">重置</span><span id="Games_help">帮助</span><span id="Games_dialogOk">确认</span><span id="Games_dialogCancel">取消</span><span id="Games_catLogic">逻辑</span><span id="Games_catLoops">循环</span><span id="Games_catMath">数学</span><span id="Games_catText">文本</span><span id="Games_catLists">列表</span><span id="Games_catColour">颜色</span><span id="Games_catVariables">变量</span><span id="Games_catProcedures">函数</span><span id="Games_httpRequestError">请求存在问题。</span><span id="Games_linkAlert">通过这个链接分享您的模块：\n\n%1</span><span id="Games_hashError">对不起，没有任何已保存的程序对应\'%1\' 。</span><span id="Games_xmlError">无法载入您保存的文件。您是否使用其他版本的Blockly创建该文件的？</span><span id="Games_listVariable">列表</span><span id="Games_textVariable">文本</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly 游戏</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit124 = opt_data.maxLevel + 1;
  for (var i124 = 1; i124 < iLimit124; i124++) {
    output += ' ' + ((i124 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i124) + '">' + soy.$$escapeHtml(i124) + '</span>' : (i124 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i124) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i124) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i124) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i124) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i124) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">祝贺！</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">取消</button><button id="doneOk" class="secondary">确认</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">此等级非常困难。您是否希望跳过它并进入下一个游戏？您总是可以稍后返回这里。<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">取消</button><button id="abortOk" class="secondary">确认</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">确认</button></div>';
};
