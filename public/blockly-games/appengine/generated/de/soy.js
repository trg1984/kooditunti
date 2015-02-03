// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly-Spiele</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrinth</span><span id="Games_bird">Vogel</span><span id="Games_turtle">Schildkröte</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Teich</span><span id="Games_pondAdvanced">JS-Teich</span><span id="Games_linesOfCode1">Du hast dieses Level mit 1 Zeile JavaScript gelöst:</span><span id="Games_linesOfCode2">Du hast dieses Level mit %1 Zeilen JavaScript gelöst:</span><span id="Games_nextLevel">Bist du bereit für Level %1?</span><span id="Games_finalLevel">Bist du bereit für die nächste Herausforderung?</span><span id="Games_linkTooltip">Speichern und auf Blöcke verlinken.</span><span id="Games_runTooltip">Das geschriebene Programm ausführen.</span><span id="Games_runProgram">Programm ausführen</span><span id="Games_resetTooltip">Stoppt das Programm und setzt das Level zurück.</span><span id="Games_resetProgram">Zurücksetzen</span><span id="Games_help">Hilfe</span><span id="Games_dialogOk">Okay</span><span id="Games_dialogCancel">Abbrechen</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">Schleifen</span><span id="Games_catMath">Mathematik</span><span id="Games_catText">Text</span><span id="Games_catLists">Listen</span><span id="Games_catColour">Farbe</span><span id="Games_catVariables">Variablen</span><span id="Games_catProcedures">Funktionen</span><span id="Games_httpRequestError">Es gab ein Problem mit der Anfrage.</span><span id="Games_linkAlert">Teile deine Blöcke mit diesem Link:\n\n%1</span><span id="Games_hashError">Leider stimmt „%1“ mit keinem gespeicherten Programm überein.</span><span id="Games_xmlError">Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Blockly-Version erstellt?</span><span id="Games_listVariable">Liste</span><span id="Games_textVariable">Text</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly-Spiele</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Glückwunsch!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Abbrechen</button><button id="doneOk" class="secondary">Okay</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dieses Level ist sehr schwierig. Möchtest du es überspringen und zum nächsten Spiel gehen? Du kannst später immer noch zurückkehren.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Abbrechen</button><button id="abortOk" class="secondary">Okay</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Okay</button></div>';
};
