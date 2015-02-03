// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Advanced.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Advanced.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Advanced.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Pond JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Sauvegarder et lier aux blocs. "><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Aide</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Utilisez la commande \'canon\' pour toucher la cible. Le premier paramètre est l’angle, le second la distance. Trouvez la bonne combinaison.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Cette cible doit être touchée plusieurs fois. Utilisez une boucle \'tant que (vrai)\' pour faire quelque chose indéfiniment.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Cet opposant avance et recule, le rendant difficile à toucher. L’expression \'analyse\' renvoie la distance exacte à l’opposant dans la direction spécifiée.<pre>scan(0, 5)</pre>Cette portée est exactement ce dont la commande \'canon\' a besoin pour tirer avec précision.' : (opt_ijData.level == 4) ? 'Cet adversaire est trop loin pour utiliser le canon (qui a une portée limite de 70 mètres). À la place, utilisez la commande \'nager\' pour commencer à nager vers l’adversaire et le percuter.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Cet adversaire est aussi trop loin pour utiliser le canon. Mais vous êtes trop faible pour survivre à une collision. Nagez vers l’adversaire tant que votre position horizontale est inférieure à 50. Puis \'stop\' et utilisez le canon.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Cet adversaire s’éloignera quand il sera touché. Nagez vers lui s’il est hors de portée (70 mètres).' : (opt_ijData.level == 7) ? 'Le lapin court au hasard. Pouvez-vous le toucher ?' : (opt_ijData.level == 8) ? 'La tour se défend ! Mais elle ne regarde que vers le nord, le sud, l’est et l’ouest.' : (opt_ijData.level == 9) ? 'Counter regarde dans toutes les directions. Pouvez-vous gérer deux adversaires à la fois ?' : (opt_ijData.level == 10) ? 'Sniper se cache dans un coin pour chercher ses cibles. Bonne chance. Sérieusement.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
