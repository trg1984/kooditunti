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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS-dam'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Gem og link til blokkene."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hjælp</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Brug \'cannon\'-kommandoen til at ramme målet. Den første parameter er vinklen, den anden parameter er afstanden. Find den rette kombination.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Dette mål skal rammes mange gange. Brug en \'while (true)\' løkke for at gøre noget uendeligt.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Denne modstander bevæger sig frem og tilbage, hvilket gør det svært at ramme. \'scan\'-kommandoen returnerer den nøjagtige afstand til modstanderen i den angivne retning.<pre>scan(0, 5)</pre>Denne afstand er præcis hvad \'cannon\'-kommandoen skal bruge for at skyde præcist.' : (opt_ijData.level == 4) ? 'Denne modstander er for langt væk til at bruge kanonen (som har en grænse på 70 meter). Brug i stedet \'swim\'-kommandoen til at svømme i modstanderens retning og ramme den.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Denne modstander er også for langt væk til at bruge kanonen. Men du er for svag til at overleve et sammenstød. Svøm mod din modstander, indtil din afstanden til modstanderen er mindre end 50. Brug så \'stop\'-kommandoen og bruge kanonen.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Denne modstander vil flytte sig væk, når den er blevet ramt. Svøm nærmere, hvis den er udenfor rækkevidde (70 meter).' : (opt_ijData.level == 7) ? 'Rabbit løber tilfældigt rundt. Kan du ramme den?' : (opt_ijData.level == 8) ? 'Rook slår tilbage! Men ser kun mod nord, syd, øst og vest.' : (opt_ijData.level == 9) ? 'Counter ser i alle retninger. Kan du klare to modstandere på én gang?' : (opt_ijData.level == 10) ? 'Sniper gemmer sig i et hjørne på udkig efter mål. Held og lykke. Virkelig.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
