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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS-Teich'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Speichern und auf Blöcke verlinken."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hilfe</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Verwende den Befehl „cannon“, um das Ziel zu schlagen. Der erste Parameter ist der Winkel, der zweite der Bereich. Finde die richtige Kombination heraus.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Dieses Ziel braucht mehrere Schläge. Verwende eine „while (true)“-Schleife, um etwas zeitlich unbegrenzt zu machen.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Dieser Gegner bewegt sich zurück und vor, was es schwer macht, ihn zu schlagen. Der Ausdruck „scan“ gibt den exakten Bereich des Gegners in der angegebenen Richtung zurück.<pre>scan(0, 5)</pre>Dieser Bereich ist genau das, was der Befehl „cannon“ braucht, um exakt abzufeuern.' : (opt_ijData.level == 4) ? 'Dieser Gegner ist zu weit weg, um die Kanone zu verwenden (sie hat ein Limit von 70 Metern). Verwende stattdessen den Befehl „swim“, um mit dem Schwimmen nach gegenüber zu beginnen und mit dem Gegner zusammenzustoßen.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Dieser Gegner ist ebenfalls zu weit weg, um die Kanone zu verwenden. Aber du bist zu schwach, um einen Zusammenstoß zu überleben. Schwimme nach gegenüber zum Gegner, derweil ist dein horizontaler Standort weniger als 50. Dann „stop“ und verwende die Kanone.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Dieser Gegner zieht fort, wenn er geschlagen wird. Schwimm nach gegenüber, falls er außerhalb des Bereichs ist (70 Meter).' : (opt_ijData.level == 7) ? 'Rabbit läuft zufällig herum. Kannst du es schlagen?' : (opt_ijData.level == 8) ? 'Rook schlägt zurück! Aber es schaut nur nach Norden, Süden, Osten und Westen.' : (opt_ijData.level == 9) ? 'Counter sieht in alle Richtungen. Kannst du mit zwei Gegnern gleichzeitig umgehen?' : (opt_ijData.level == 10) ? 'Sniper versteckt sich in einer Ecke, das nach Zielen sucht. Viel Glück. Ernsthaft.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
