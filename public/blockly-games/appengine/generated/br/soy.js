// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">C\'hoarioù Blocky</span><span id="Games_puzzle">Miltamm</span><span id="Games_maze">Milendall</span><span id="Games_bird">Labous</span><span id="Games_turtle">Baot</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Stank</span><span id="Games_pondAdvanced">Stank JS</span><span id="Games_linesOfCode1">Diskoulmet ho peus al live-mañ gant 1 linenn JavaScript :</span><span id="Games_linesOfCode2">Diskoulmet ho peus al live-mañ gant %1 linenn JavaScript :</span><span id="Games_nextLevel">Ha prest oc\'h evit al live %1 ?</span><span id="Games_finalLevel">Ha prest oc\'h evit an dae da zont ?</span><span id="Games_linkTooltip">Enrollañ ha liammañ ouzh ar bloc\'hadoù.</span><span id="Games_runTooltip">Lañsañ ar programm ho peus skrivet.</span><span id="Games_runProgram">Lañsañ ar programm</span><span id="Games_resetTooltip">Paouez ar programm hag adderaouekaat al live.</span><span id="Games_resetProgram">Adderaouekaat</span><span id="Games_help">Skoazell</span><span id="Games_dialogOk">Mat eo</span><span id="Games_dialogCancel">Nullañ</span><span id="Games_catLogic">Poell</span><span id="Games_catLoops">Rodelloù</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Testenn</span><span id="Games_catLists">Rolloù</span><span id="Games_catColour">Liv</span><span id="Games_catVariables">Argemmennoù</span><span id="Games_catProcedures">Arc\'hwelioù</span><span id="Games_httpRequestError">Ur gudenn zo gant ar reked.</span><span id="Games_linkAlert">Rannañ ho ploc\'hoù gant al liamm-mañ :\n\n%1</span><span id="Games_hashError">Digarezit. "%1" ne glot gant programm enrollet ebet.</span><span id="Games_xmlError">Ne c\'haller ket kargañ ho restr enrollet. Marteze e oa bet krouet gant ur stumm disheñvel eus Blockly ?</span><span id="Games_listVariable">roll</span><span id="Games_textVariable">testenn</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'C\'hoarioù Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gourc\'hemennoù !</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Nullañ</button><button id="doneOk" class="secondary">Mat eo</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Diaes-kenañ eo al live-mañ. Ha c\'hoant ho peus da lammat anezhañ ha da dremen d\'ar c\'hoari war-lerc\'h ? Gallout a rit atav distreiñ dezhañ diwezhatoc\'h.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Nullañ</button><button id="abortOk" class="secondary">Mat eo</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Mat eo</button></div>';
};
