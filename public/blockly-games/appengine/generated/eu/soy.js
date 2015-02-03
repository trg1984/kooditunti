// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirintoa</span><span id="Games_bird">Txoria</span><span id="Games_turtle">Dortoka</span><span id="Games_movie">Filma</span><span id="Games_pondBasic">Urmaela</span><span id="Games_pondAdvanced">JS Urmaela</span><span id="Games_linesOfCode1">Maila hau gainditu duzu JavaScript lerro bat erabiliz:</span><span id="Games_linesOfCode2">Maila hau gainditu duzu JavaScript %1 lerro erabiliz:</span><span id="Games_nextLevel">Prest zaude %1. mailarako?</span><span id="Games_finalLevel">Prest zaude hurrengo erronkarako?</span><span id="Games_linkTooltip">Gorde eta lotura sortu.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Programa exekutatu</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Berriz hasi</span><span id="Games_help">Laguntza</span><span id="Games_dialogOk">Ados</span><span id="Games_dialogCancel">Utzi</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Begiztak</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Testua</span><span id="Games_catLists">Zerrendak</span><span id="Games_catColour">Kolorea</span><span id="Games_catVariables">Aldagaiak</span><span id="Games_catProcedures">Prozedurak</span><span id="Games_httpRequestError">Eskaerarekin arazo bat egon da.</span><span id="Games_linkAlert">Elkarbanatu blokeak lotura honekin:\n\n%1</span><span id="Games_hashError">Barkatu, «%1» ez dator bat gordetako ezein programarekin.</span><span id="Games_xmlError">Ezin izan da zure fitxategia kargatu. Agian Blockly-ren beste bertsio batekin sortua izan zen?</span><span id="Games_listVariable">zerrenda</span><span id="Games_textVariable">testua</span></div>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Zorionak!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Utzi</button><button id="doneOk" class="secondary">Ados</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Utzi</button><button id="abortOk" class="secondary">Ados</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Ados</button></div>';
};
