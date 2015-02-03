// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Skladačka</span><span id="Games_maze">Bludisko</span><span id="Games_bird">Vták</span><span id="Games_turtle">Korytnačka</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Závažie</span><span id="Games_pondAdvanced">JS závažie</span><span id="Games_linesOfCode1">Vyriešil si úroveň jedným riadkom JavaScriptu:</span><span id="Games_linesOfCode2">Vyriešil si túto úroveň s %1 riadkami JavaScriptu:</span><span id="Games_nextLevel">Pripravený na úroveň %1?</span><span id="Games_finalLevel">Pripravený na ďalšiu výzvu?</span><span id="Games_linkTooltip">Uložiť a zdieľať odkaz na tento program.</span><span id="Games_runTooltip">Spustiť napísaný program.</span><span id="Games_runProgram">Spustiť program</span><span id="Games_resetTooltip">Zastaviť program a vrátiť úroveň do pôvodného \\nstavu. </span><span id="Games_resetProgram">Odznova</span><span id="Games_help">Pomoc</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Zrušiť</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Slučky</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Text</span><span id="Games_catLists">Zoznamy</span><span id="Games_catColour">Farba</span><span id="Games_catVariables">Premenné</span><span id="Games_catProcedures">Funkcie</span><span id="Games_httpRequestError">Nastal problém pri spracovaní požiadavky.</span><span id="Games_linkAlert">Zdieľať tento program skopírovaním odkazu\n\n%1</span><span id="Games_hashError">Prepáč, \'%1\' nie je meno žiadnemu uloženému programu.</span><span id="Games_xmlError">Nebolo možné načítať uložený súbor. Možno bol vytvorený v inej verzii Blockly.</span><span id="Games_listVariable">zoznam</span><span id="Games_textVariable">text</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Games</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Blahoželáme!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Zrušiť</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Táto úroveň je veľmi ťažká. Chceš ju preskočiť a pozrieť sa na ďalšiu hru? Neskôr sa sem môžeš vrátiť.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Zrušiť</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
