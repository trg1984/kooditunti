// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Spelletjes</span><span id="Games_puzzle">Puzzel</span><span id="Games_maze">Doolhof</span><span id="Games_bird">Vogel</span><span id="Games_turtle">Schildpad</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Vijver</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">Je hebt dit niveau opgelost met 1 regel JavaScript:</span><span id="Games_linesOfCode2">Je hebt dit niveau opgelost met %1 regels JavaScript:</span><span id="Games_nextLevel">Ben je klaar voor niveau %1?</span><span id="Games_finalLevel">Ben je klaar voor de volgende uitdaging?</span><span id="Games_linkTooltip">Opslaan en koppelen naar blokken.</span><span id="Games_runTooltip">Voer het door jou geschreven programma uit.</span><span id="Games_runProgram">Programma uitvoeren</span><span id="Games_resetTooltip">Stop het programma en begin het niveau opnieuw.</span><span id="Games_resetProgram">Opnieuw instellen</span><span id="Games_help">Hulp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annuleren</span><span id="Games_catLogic">Logica</span><span id="Games_catLoops">Lussen</span><span id="Games_catMath">Formules</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Lijsten</span><span id="Games_catColour">Kleur</span><span id="Games_catVariables">Variabelen</span><span id="Games_catProcedures">Functies</span><span id="Games_httpRequestError">Er is een probleem opgetreden tijdens het verwerken van het verzoek.</span><span id="Games_linkAlert">Deel uw blokken via deze koppeling:\n\n%1</span><span id="Games_hashError">"%1" komt helaas niet overeen met een opgeslagen bestand.</span><span id="Games_xmlError">Uw opgeslagen bestand kan niet geladen worden. Is het misschien gemaakt met een andere versie van Blockly?</span><span id="Games_listVariable">lijst</span><span id="Games_textVariable">tekst</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Spelletjes</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Van harte gefeliciteerd!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annuleren</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dit niveau is erg moeilijk. Wil je het overslaan en naar het volgende spel gaan? Je kunt altijd later terugkomen.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annuleren</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
