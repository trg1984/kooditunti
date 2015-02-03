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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS Pond'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Opslaan en koppelen naar blokken."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hulp</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Gebruik het commando "kanon" om op het doel te schieten. De eerste parameter is de hoek, de tweede parameter is het bereik. Zoek de juiste combinatie.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Dit doel moet meerdere keren geraakt worden. Gebruik de lus "zolang (waar)" om iets voor onbepaalde tijd uit te voeren.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Deze tegenstander beweegt heen en weer, waardoor die moeilijk te raken is. Het commando "scannen" geeft de exacte afstand en de richting naar de tegenstander aan.<pre>scan(0, 5)</pre>Dit bereik is precies wat het commando "kanon" nodig heeft om nauwkeurig te vuren.' : (opt_ijData.level == 4) ? 'Deze tegenstander is te ver weg om het kanon gebruiken (dat heeft een limiet van 70 meter). Gebruik in plaats daarvan het commando "zwemmen" opdracht om te beginnen met zwemmen in de richting van de tegenstander en er tegenaan te botsen.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Deze tegenstander is ook te ver weg om het kanon te gebruiken. Maar je bent te zwak om een botsing te overleven. Zwem in de richting van de tegenstander tot de horizontale afstand kleiner is dan 50. "stop" dan en gebruik het kanon.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Deze tegenstander zwemt weg als die geraakt wordt. Zwemmen in de richting van de tegenstander als deze zich buiten het bereik bevindt (70 meter).' : (opt_ijData.level == 7) ? 'Het konijn loopt willekeurig rond. Kan jij het raken?' : (opt_ijData.level == 8) ? 'De toren vecht terug, maar kijkt alleen maar naar het noorden, zuiden, oosten en westen.' : (opt_ijData.level == 9) ? 'De teller kijkt in alle richtingen. Kan je twee tegenstanders tegelijk aan?' : (opt_ijData.level == 10) ? 'De sluipschutter verbergt zich in de hoeken op zoek naar slachtoffers. Veel succes. Echt.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
