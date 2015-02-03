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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Estanque JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Guardar y enlazar a los bloques."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Ayuda</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Usa el comando \'cannon\' para darle al blanco. El primer parámetro es el ángulo, el segundo es el alcance. Encuentra la combinación correcta.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Este objetivo debe ser golpeado muchas veces. Usa un bucle \'while (true)\'(mientras sea verdadero) para hacer algo de forma indefinida.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Este oponente se mueve hacia atrás y adelante, haciéndolo difícil de golpear. La expresión \'scan\' devuelve el alcance exacto al oponente en la dirección especificada.<pre>scan(0, 5)</pre>Este alcance es exactamente lo que el comando \'cannon\' necesita para disparar con precisión.' : (opt_ijData.level == 4) ? 'Este oponente está demasiado lejos para usar el cañón (que tiene un límite de 70 metros). En su lugar, utilisa el comando \'swim\' para comenzar a nadar hacia el oponente y chocar con él.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Este oponente también está demasiado lejos como para usar el cañón. Pero eres demasiado débil para sobrevivir a una colisión. Nada hacia el oponente mientras su ubicación horizontal sea menor a 50. Luego detente (con \'stop\') y usa el cañón.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Este oponente se alejará cuando sea golpeado. Nada hacia él si está fuera de alcance (70 metros).' : (opt_ijData.level == 7) ? 'El conejo correo por cualquier lado. ¿Puedes darle?' : (opt_ijData.level == 8) ? '¡La torre contraataca! Pero sólo mira al norte, sur, este y oeste.' : (opt_ijData.level == 9) ? 'El contador mira en todas las direcciones. ¿Podrás controlar dos oponentes a la vez?' : (opt_ijData.level == 10) ? 'El francotirador se esconde en una esquina buscando objetivos. Buena suerte. En serio.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
