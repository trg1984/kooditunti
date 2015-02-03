// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Basic.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Basic.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Basic.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Basic.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Teich'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Speichern und auf Blöcke verlinken."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hilfe</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + Pond.Basic.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Verwende den Befehl „cannon“, um das Ziel zu schlagen. Der erste Parameter ist der Winkel, der zweite der Bereich. Finde die richtige Kombination heraus.<br><br><img src="pond/docs/cannon.png" height=41 width=213>' : (opt_ijData.level == 2) ? 'Dieses Ziel braucht mehrere Schläge. Verwende eine „while (true)“-Schleife, um etwas zeitlich unbegrenzt zu machen.<br><br><img src="pond/docs/whiletrue.png" height=90 width=164>' : (opt_ijData.level == 3) ? 'Dieser Gegner bewegt sich zurück und vor, was es schwer macht, ihn zu schlagen. Der Ausdruck „scan“ gibt den exakten Bereich des Gegners in der angegebenen Richtung zurück.<br><br><img src="pond/docs/scan.png" height=36 width=134><br><br>Dieser Bereich ist genau das, was der Befehl „cannon“ braucht, um exakt abzufeuern.' : (opt_ijData.level == 4) ? 'Dieser Gegner ist zu weit weg, um die Kanone zu verwenden (sie hat ein Limit von 70 Metern). Verwende stattdessen den Befehl „swim“, um mit dem Schwimmen nach gegenüber zu beginnen und mit dem Gegner zusammenzustoßen.<br><br><img src="pond/docs/swim.png" height=41 width=131>' : (opt_ijData.level == 5) ? 'Dieser Gegner ist ebenfalls zu weit weg, um die Kanone zu verwenden. Aber du bist zu schwach, um einen Zusammenstoß zu überleben. Schwimme nach gegenüber zum Gegner, derweil ist dein horizontaler Standort weniger als 50. Dann „stop“ und verwende die Kanone.<br><br><img src="pond/docs/loc_x_50.png" height=37 width=191>' : (opt_ijData.level == 6) ? 'Dieser Gegner zieht fort, wenn er geschlagen wird. Schwimm nach gegenüber, falls er außerhalb des Bereichs ist (70 Meter).' : (opt_ijData.level == 7) ? 'Rabbit läuft zufällig herum. Kannst du es schlagen?' : (opt_ijData.level == 8) ? 'Rook schlägt zurück! Aber es schaut nur nach Norden, Süden, Osten und Westen.' : (opt_ijData.level == 9) ? 'Counter sieht in alle Richtungen. Kannst du mit zwei Gegnern gleichzeitig umgehen?' : (opt_ijData.level == 10) ? 'Sniper versteckt sich in einer Ecke, das nach Zielen sucht. Viel Glück. Ernsthaft.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Pond.Basic.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><category name="Teich"><block type="pond_cannon"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value><value name="RANGE"><block type="pond_math_number"><field name="NUM">70</field></block></value></block>' + ((opt_ijData.level >= 3) ? '<block type="pond_scan"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value></block>' : '') + ((opt_ijData.level >= 4) ? '<block type="pond_swim"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value></block>' : '') + ((opt_ijData.level >= 5) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 5) ? '<block type="pond_loc_x"></block><block type="pond_loc_y"></block>' : '') + ((opt_ijData.level >= 8) ? '<block type="pond_speed"></block><block type="pond_health"></block>' : '') + '</category>' + ((opt_ijData.level >= 2) ? '<category name="Logik">' + ((opt_ijData.level >= 5) ? '<block type="pond_controls_if"></block><block type="logic_compare"></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="logic_operation"></block>' : '') + '<block type="logic_boolean"></block></category><category name="Schleifen"><block type="pond_loops_while"></block></category>' : '') + '<category name="Mathematik"><block type="pond_math_number"></block>' + ((opt_ijData.level >= 7) ? '<block type="pond_math_arithmetic"></block><block type="pond_math_single"></block><block type="pond_math_change"><value name="DELTA"><block type="pond_math_number"><field name="NUM">1</field></block></value></block><block type="math_random_float"></block>' : '') + '</category>' + ((opt_ijData.level >= 7) ? '<category name="Variablen" custom="VARIABLE"></category>' + ((opt_ijData.level >= 8) ? '<category name="Funktionen" custom="PROCEDURE"></category>' : '') : '') + '</xml>';
};