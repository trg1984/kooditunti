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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS-damm'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Spara och länka till block."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hjälp</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Använd kommandot \'cannon\' för att träffa kanonen. Den första parametern är vinkeln, den andra parametern är räckvidden. Hitta den rätta kombinationen.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Detta mål behöver träffas flera gånger. Använd en \'while (true)\'-loop för att göra någonting oändligt.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Den här motståndaren rör sig fram och tillbaka vilket gör det svårt att träffa. Kommandot \'scan\' returnerar det exakta avståndet till en motståndare i den angivna riktningen.<pre>scan(0, 5)</pre>Denna räckvidd är vad kommandot \'cannon\' precis behöver för att skjuta träffsäkert.' : (opt_ijData.level == 4) ? 'Denna användare är för långt borta för att använda kanonen (som har en räckvidd på 70 meter). Använd istället kommandot \'swim\' för att börja simma mot motståndaren och krocka med den.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Denna motståndare är för långt borta för att använda kanonen. Men du är för svag för att överleva en kollision. Simma fram till motståndaren medan din horisontala position är mindre än 50. Använd kommandot \'stop\' sedan och använd kanonen.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Denna motståndare förflyttar sig bortåt när den träffas. Simma framåt om den är utom räckhåll.' : (opt_ijData.level == 7) ? 'Kaninen springer runt slumpmässigt. Kan du träffa den?' : (opt_ijData.level == 8) ? 'Schacktornet skjuter tillbaka! Men den tittar bara norrut, söderut, österut och västerut.' : (opt_ijData.level == 9) ? 'Counter tittar i alla riktningar. Kan du hantera alla motståndare samtidigt?' : (opt_ijData.level == 10) ? 'Krypskytten gömmer sig i ett hörn och letar efter måltavlor. Lycka till. Vi menar det.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
