// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Gieugh ëd Blockly</span><span id="Games_puzzle">S-ciapatesta</span><span id="Games_maze">Labirint</span><span id="Games_bird">Osel</span><span id="Games_turtle">Bissa copera</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Baciass</span><span id="Games_pondAdvanced">Baciass JS</span><span id="Games_linesOfCode1">A l\'ha arzolvù \'s livel con 1 linia ëd JavaScript:</span><span id="Games_linesOfCode2">A l\'ha arzolvù \'s livel con %1 linie ëd JavaScript:</span><span id="Games_nextLevel">É-lo pront për ël livel %1?</span><span id="Games_finalLevel">É-lo pront për n\'àutra dësfida?</span><span id="Games_linkTooltip">Argistré e lijé ai blòch.</span><span id="Games_runTooltip">Fé andé ël programa ch\'a l\'ha scrivù.</span><span id="Games_runProgram">Fé andé ël programa</span><span id="Games_resetTooltip">Fërmé ël programa e inissialisé torna ël livel.</span><span id="Games_resetProgram">Buté torna coma al prinsipi</span><span id="Games_help">Giuté</span><span id="Games_dialogOk">Va bin</span><span id="Games_dialogCancel">Anulé</span><span id="Games_catLogic">Lògica</span><span id="Games_catLoops">Liasse</span><span id="Games_catMath">Matemàtica</span><span id="Games_catText">Test</span><span id="Games_catLists">Liste</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variàbij</span><span id="Games_catProcedures">Fonsion</span><span id="Games_httpRequestError">A-i é staje un problema con l\'arcesta.</span><span id="Games_linkAlert">Ch\'a partagia ij sò blòch grassie a sta liura: %1</span><span id="Games_hashError">An dëspias, \'%1 a corëspond a gnun programa salvà.</span><span id="Games_xmlError">A l\'é nen podusse carié so archivi salvà. Miraco a l\'é stàit creà con na version diferenta ëd Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">test</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Gieugh ëd Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Compliment!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Anulé</button><button id="doneOk" class="secondary">Va bin</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ës livel a l\'é motobin difìcil. Veul-lo autelo e passer al gieugh apress? A peul sempe torné andré pi tard.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Anulé</button><button id="abortOk" class="secondary">Va bin</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Va bin</button></div>';
};
