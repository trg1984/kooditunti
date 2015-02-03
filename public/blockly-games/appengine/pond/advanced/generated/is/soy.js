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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS Pollur'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Vista og tengja við kubba."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hjálp</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Notaðu \'fallbyssað skipunina til að hitta markið. Fyrri stikinn er hornið, sá seinni er vegalengdin. Finndu réttu samsetninguna.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Þetta mark verður að hitta mörgum sinnum. Notaðu \'meðan (satt)\' lykkju til að gera eitthvað endalaust.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Þessi andstæðingur færist fram og aftur svo erfitt er að hitta. Aðgerðin \'skanna\' gefur hve langt frá andstæðingurinn er í tiltekna stefnu.<pre>scan(0, 5)</pre>Þessi vegalengd er nákvæmlega það sem skipunin \'fallbyssa\' þarf til að skjóta nákvæmt.' : (opt_ijData.level == 4) ? 'Þessi andstæðingur er of langt frá til að fallbyssan nýtist (hennar hámark er 70 metrar). Notaðu þess í stað \'synda\' skipunina til að synda í átt að andstæðingnum og rekast á hann.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Þessi andstæðingur er líka og langt frá til að nota fallbyssuna. En þú ert of veikburða til að þola árekstur. Syntu í átt að andstæðingnum á meðan staður þinn lárétt er minna en 50. Notaðu svo \'stöðva\' og fallbyssuna.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Þessi andstæðingur mun færa sig fjær þegar skot hæfir hann. Syntu í átt til hans ef hann er utan skotfæris (70 metrar).' : (opt_ijData.level == 7) ? 'Kanína hleypur um handahófskennt. Getur þú hitt hana?' : (opt_ijData.level == 8) ? 'Hrókur snýst til varnmr! En hann horfir aðeins norður, suður, austur og vestur.' : (opt_ijData.level == 9) ? 'Teljari horfir í allar áttir. Ræður þú við tvo andstæðinga í einu?' : (opt_ijData.level == 10) ? 'Leyniskytta felur sig í horni og leitar að skotmörkum. Vonandi gengur þér vel. Vonandi...' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
