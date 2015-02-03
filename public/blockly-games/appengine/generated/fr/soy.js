// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Jeux Blocky</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrinthe</span><span id="Games_bird">Oiseau</span><span id="Games_turtle">Tortue</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">Pond JS</span><span id="Games_linesOfCode1">Vous avez résolu ce niveau avec 1 ligne de JavaScript :</span><span id="Games_linesOfCode2">Vous avez résolu ce niveau avec %1 lignes de JavaScript :</span><span id="Games_nextLevel">Êtes-vous prêt pour le niveau %1 ?</span><span id="Games_finalLevel">Êtes-vous prêt pour le prochain défi ?</span><span id="Games_linkTooltip">Sauvegarder et lier aux blocs. </span><span id="Games_runTooltip">Lancer le programme que vous avez écrit.</span><span id="Games_runProgram">Exécuter le programme</span><span id="Games_resetTooltip">Arrêter le programme et réinitialiser le niveau.</span><span id="Games_resetProgram">Réinitialiser</span><span id="Games_help">Aide</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annuler</span><span id="Games_catLogic">Logique</span><span id="Games_catLoops">Boucles</span><span id="Games_catMath">Mathématiques</span><span id="Games_catText">Texte</span><span id="Games_catLists">Listes</span><span id="Games_catColour">Couleur</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Fonctions</span><span id="Games_httpRequestError">Il y a eu un problème avec la demande.</span><span id="Games_linkAlert">Partagez vos blocs grâce à ce lien:\n\n%1</span><span id="Games_hashError">Désolé, \'%1\' ne correspond à aucun programme sauvegardé.</span><span id="Games_xmlError">Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">texte</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Jeux Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Félicitations !</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annuler</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ce niveau est très difficile. Voulez-vous le sauter et passer au jeu suivant ? Vous pourrez toujours y revenir plus tard.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annuler</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
