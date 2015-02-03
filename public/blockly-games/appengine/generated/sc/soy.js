// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Giogus de Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirintu</span><span id="Games_bird">Pilloni</span><span id="Games_turtle">Tostoinu</span><span id="Games_movie">Filmi</span><span id="Games_pondBasic">Stàini</span><span id="Games_pondAdvanced">Stàini JS</span><span id="Games_linesOfCode1">As arresòlviu custu livellu cun 1 arriga de JavaScript:</span><span id="Games_linesOfCode2">As arresòlviu custu livellu cun %1 arrigas de JavaScript:</span><span id="Games_nextLevel">Prontu ses po su livellu %1?</span><span id="Games_finalLevel">Prontu ses po un\'àteru disafiu?</span><span id="Games_linkTooltip">Sarva e alliòngia a is brocus. </span><span id="Games_runTooltip">Arrollia su programa chi as scritu.</span><span id="Games_runProgram">Arròllia su Programa</span><span id="Games_resetTooltip">Firma su programa e anudda su livellu.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Agiudu</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Anudda</span><span id="Games_catLogic">Lògica</span><span id="Games_catLoops">Lòrigas</span><span id="Games_catMath">Matemàtica</span><span id="Games_catText">Testu</span><span id="Games_catLists">Lista</span><span id="Games_catColour">Colori</span><span id="Games_catVariables">Variabilis</span><span id="Games_catProcedures">Funtzionis</span><span id="Games_httpRequestError">Ddui fut unu problema cun sa pregunta</span><span id="Games_linkAlert">Poni is brocus tuus in custu acàpiu:\n\n%1</span><span id="Games_hashError">Mi dispraxit, \'%1\' non torrat a pari cun nimancu unu de is programas sarvaus.</span><span id="Games_xmlError">Non potzu carrigai su file sarvau. Fortzis est stètiu fatu cun d-una versioni diferenti de Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">testu</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Giogus de Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Bravu!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Anudda</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Custu livellu est difìcili meda. Bolis andai a fai un\'àteru giogu? Podis torrai a custu prus a tardu si bolis.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Anudda</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
