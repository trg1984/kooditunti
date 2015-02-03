// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blocklyspel</span><span id="Games_puzzle">Pussel</span><span id="Games_maze">Labyrint</span><span id="Games_bird">Fågel</span><span id="Games_turtle">Sköldpadda</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Damm</span><span id="Games_pondAdvanced">JS-damm</span><span id="Games_linesOfCode1">Du löste nivån med 1 rad JavaScript:</span><span id="Games_linesOfCode2">Du löste nivån med %1 rader JavaScript:</span><span id="Games_nextLevel">Är du redo för nivå %1?</span><span id="Games_finalLevel">Är du redo för nästa utmaning?</span><span id="Games_linkTooltip">Spara och länka till block.</span><span id="Games_runTooltip">Kör programmet du skrev.</span><span id="Games_runProgram">Kör program</span><span id="Games_resetTooltip">Stoppa programmet och återställ nivån.</span><span id="Games_resetProgram">Återställ</span><span id="Games_help">Hjälp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Avbryt</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">Loopar</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Text</span><span id="Games_catLists">Listor</span><span id="Games_catColour">Färg</span><span id="Games_catVariables">Variabler</span><span id="Games_catProcedures">Funktioner</span><span id="Games_httpRequestError">Det uppstod ett problem med begäran.</span><span id="Games_linkAlert">Dela dina block med länken: \n\n%1</span><span id="Games_hashError">Tyvärr, \'%1\' överensstämmer inte med något sparat program.</span><span id="Games_xmlError">Kunde inte läsa din sparade fil. Den skapades kanske med en annan version av Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">text</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blocklyspel</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulerar!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Avbryt</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Den här nivån är extremt svår. Vill du hoppa över den och gå till nästa spel? Du kan alltid komma tillbaka senare.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Avbryt</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
