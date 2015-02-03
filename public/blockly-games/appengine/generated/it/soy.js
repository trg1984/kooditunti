// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Giochi Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirinto</span><span id="Games_bird">Uccello</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Stagno</span><span id="Games_pondAdvanced">Stagno JS</span><span id="Games_linesOfCode1">Hai risolto questo livello con 1 riga di codice JavaScript:</span><span id="Games_linesOfCode2">Hai risolto questo livello con %1 righe di codice JavaScript:</span><span id="Games_nextLevel">Sei pronto per il livello %1?</span><span id="Games_finalLevel">Sei pronto per la prossima sfida?</span><span id="Games_linkTooltip">Salva e collega ai blocchi.</span><span id="Games_runTooltip">Esegui il programma che hai scritto.</span><span id="Games_runProgram">Esegui programma</span><span id="Games_resetTooltip">Interrompi il programma e ripristina il livello.</span><span id="Games_resetProgram">Reimposta</span><span id="Games_help">Aiuto</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annulla</span><span id="Games_catLogic">Logica</span><span id="Games_catLoops">Cicli</span><span id="Games_catMath">Matematica</span><span id="Games_catText">Testo</span><span id="Games_catLists">Elenchi</span><span id="Games_catColour">Colore</span><span id="Games_catVariables">Variabili</span><span id="Games_catProcedures">Funzioni</span><span id="Games_httpRequestError">La richiesta non è stata soddisfatta.</span><span id="Games_linkAlert">Condividi i tuoi blocchi con questo collegamento:\n\n%1</span><span id="Games_hashError">Mi spiace, \'%1\' non corrisponde ad alcun programma salvato.</span><span id="Games_xmlError">Non è stato possibile caricare il documento.  Forse è stato creato con una versione diversa di Blockly?</span><span id="Games_listVariable">elenco</span><span id="Games_textVariable">testo</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Giochi Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Complimenti!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annulla</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Questo livello è molto difficile. Desideri saltarlo e andare al successivo? Puoi sempre tornare indietro più tardi.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annulla</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
