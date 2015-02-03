// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly leikir</span><span id="Games_puzzle">Púsl</span><span id="Games_maze">Völundarhús</span><span id="Games_bird">Fugl</span><span id="Games_turtle">Skjaldbaka</span><span id="Games_movie">Hreyfimynd</span><span id="Games_pondBasic">Pollur</span><span id="Games_pondAdvanced">JS Pollur</span><span id="Games_linesOfCode1">Þú leystir þennan áfanga með 1 línu af JavaScript:</span><span id="Games_linesOfCode2">Þú leystir þennan áfanga með %1 línum af JavaScript:</span><span id="Games_nextLevel">Viltu fara í áfanga %1?</span><span id="Games_finalLevel">Ertu til að fást við næstu áskorun?</span><span id="Games_linkTooltip">Vista og tengja við kubba.</span><span id="Games_runTooltip">Keyra forritið sem þú skrifaðir.</span><span id="Games_runProgram">Keyra forritið</span><span id="Games_resetTooltip">Stöðva forritið og núllstilla áfangann.</span><span id="Games_resetProgram">Byrja aftur</span><span id="Games_help">Hjálp</span><span id="Games_dialogOk">Í lagi</span><span id="Games_dialogCancel">Hætta við</span><span id="Games_catLogic">Rökvísi</span><span id="Games_catLoops">Lykkjur</span><span id="Games_catMath">Reikningur</span><span id="Games_catText">Texti</span><span id="Games_catLists">Listar</span><span id="Games_catColour">Litir</span><span id="Games_catVariables">Breytur</span><span id="Games_catProcedures">Föll</span><span id="Games_httpRequestError">Það kom upp vandamál með beiðnina.</span><span id="Games_linkAlert">Deildu kubbunum þínum með þessari krækju:</span><span id="Games_hashError">Því miður, \'%1\' passar ekki við neitt vistað forrit.</span><span id="Games_xmlError">Gat ekki hlaðið vistuðu skrána þína. Var hún kannske búin til í annarri útgáfu af Blockly?</span><span id="Games_listVariable">listi</span><span id="Games_textVariable">texti</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly leikir</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Til hamingju!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Hætta við</button><button id="doneOk" class="secondary">Í lagi</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Þessi áfangi er mjög erfiður. Viltu sleppa honum og fara í næsta leik? Þú getur alltaf reynt aftur seinna.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Hætta við</button><button id="abortOk" class="secondary">Í lagi</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Í lagi</button></div>';
};
