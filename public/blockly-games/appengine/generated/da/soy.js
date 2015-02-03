// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Spil</span><span id="Games_puzzle">Puslespil</span><span id="Games_maze">Labyrint</span><span id="Games_bird">Fugl</span><span id="Games_turtle">Skildpadde</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Dam</span><span id="Games_pondAdvanced">JS-dam</span><span id="Games_linesOfCode1">Du har løst dette niveau med 1 linje JavaScript:</span><span id="Games_linesOfCode2">Du har løst dette niveau med %1 linjer JavaScript:</span><span id="Games_nextLevel">Er du klar til niveau %1?</span><span id="Games_finalLevel">Er du klar til den næste udfordring?</span><span id="Games_linkTooltip">Gem og link til blokkene.</span><span id="Games_runTooltip">Kør det program, du skrev.</span><span id="Games_runProgram">Kør program</span><span id="Games_resetTooltip">Stop programmet og nulstille niveau.</span><span id="Games_resetProgram">Nulstil</span><span id="Games_help">Hjælp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Afbryd</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">Løkker</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Lister</span><span id="Games_catColour">Farve</span><span id="Games_catVariables">Variabler</span><span id="Games_catProcedures">Funktioner</span><span id="Games_httpRequestError">Der var et problem med forespørgslen.</span><span id="Games_linkAlert">Del dine blokke med dette link:\n\n%1</span><span id="Games_hashError">Beklager, \'%1\' passer ikke med nogen gemte programmer.</span><span id="Games_xmlError">Kunne ikke hente din gemte fil.  Måske er den lavet med en anden version af Blockly?</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">tekst</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Spil</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Tillykke!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Afbryd</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dette niveau er yderst vanskeligt. Vil du springe det over og gå videre til det næste spil? Du kan altid komme tilbage senere.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Afbryd</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
