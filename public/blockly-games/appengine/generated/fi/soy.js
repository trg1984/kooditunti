// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Pelit</span><span id="Games_puzzle">Palapeli</span><span id="Games_maze">Sokkelo</span><span id="Games_bird">Lintu</span><span id="Games_turtle">Kilpikonna</span><span id="Games_movie">Elokuva</span><span id="Games_pondBasic">Lampi</span><span id="Games_pondAdvanced">JS-lampi</span><span id="Games_linesOfCode1">Ratkaisit tämän tason yhdellä rivillä JavaScriptiä:</span><span id="Games_linesOfCode2">Ratkaisit tämän tason %1 rivillä JavaScriptiä:</span><span id="Games_nextLevel">Oletko valmis tasoon %1?</span><span id="Games_finalLevel">Oletko valmis seuraavaan haasteeseen?</span><span id="Games_linkTooltip">Tallenna ja linkitä lohkoihin. </span><span id="Games_runTooltip">Suorita kirjoittamasi ohjelma. </span><span id="Games_runProgram">Suorita ohjelma</span><span id="Games_resetTooltip">Lopeta ohjelma ja nollaa taso. </span><span id="Games_resetProgram">Nollaa</span><span id="Games_help">Ohje</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Peru</span><span id="Games_catLogic">Logiikka</span><span id="Games_catLoops">Silmukat</span><span id="Games_catMath">Matematiikka</span><span id="Games_catText">Teksti</span><span id="Games_catLists">Listat</span><span id="Games_catColour">Väri</span><span id="Games_catVariables">Muuttujat</span><span id="Games_catProcedures">Funktiot</span><span id="Games_httpRequestError">Pyyntö epäonnistui.</span><span id="Games_linkAlert">Jaa lohkosi tällä linkillä:</span><span id="Games_hashError">Valitettavasti \'%1\' ei vastaa mitään tallennettua ohjelmaa.</span><span id="Games_xmlError">Tallennuksen lataaminen epäonnistui. Ehkä se on tehty Blocklyn eri versiolla?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">teksti</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Pelit</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Onnittelut!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Peru</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Tämä taso on erittäin haastava. Haluatko ohittaa sen ja siirtyä seuraavaan peliin? Voit palata takaisin myöhemmin.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Peru</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
