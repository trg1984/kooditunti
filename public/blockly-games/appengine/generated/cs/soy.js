// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Hry Blockly</span><span id="Games_puzzle">Skládačka</span><span id="Games_maze">Bludiště</span><span id="Games_bird">Pták</span><span id="Games_turtle">Želva</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Rybník</span><span id="Games_pondAdvanced">JS Rybník</span><span id="Games_linesOfCode1">Vyřešil jsi úroveň jednou řádkou JavaScriptu:</span><span id="Games_linesOfCode2">Vyřešil jsi úroveň %1 řádkami JavaScriptu:</span><span id="Games_nextLevel">Připraveni na úroveň %1?</span><span id="Games_finalLevel">Připraveni na další výzvu?</span><span id="Games_linkTooltip">Ulož a spoj bloky..</span><span id="Games_runTooltip">Spustí program, který jste napsali.</span><span id="Games_runProgram">Spusť program</span><span id="Games_resetTooltip">Zastaví program a vrátí úroveň do výchozího stavu.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Nápověda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Zrušit</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Smyčky</span><span id="Games_catMath">Matika</span><span id="Games_catText">Text</span><span id="Games_catLists">Seznamy</span><span id="Games_catColour">Barva</span><span id="Games_catVariables">Proměnné</span><span id="Games_catProcedures">Procedury</span><span id="Games_httpRequestError">Došlo k potížím s požadavkem.</span><span id="Games_linkAlert">Sdílej bloky tímto odkazem: \n\n%1</span><span id="Games_hashError">Omlouváme se, \'%1\' nesouhlasí s žádným z uložených souborů.</span><span id="Games_xmlError">Nepodařilo se uložit vás soubor.  Pravděpodobně byl vytvořen jinou verzí Blockly?</span><span id="Games_listVariable">seznam</span><span id="Games_textVariable">text</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Hry Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulace!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Zrušit</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Tato úroveň je velmi obtížná. Chceš ji přeskočit a pokračovat na další hru? Kdykoli se můžeš vrátit zpět.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Zrušit</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
