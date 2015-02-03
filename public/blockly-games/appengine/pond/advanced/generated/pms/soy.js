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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Baciass JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Argistré e lijé ai blòch."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Giuté</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Ch\'a deuvra ël comand \'canon\' për colpì ël bërsaj. Ël prim paràmeter a l\'é l\'àngol, ël second a l\'é la distansa. Ch\'a treuva la bon-a combinassion.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Ës bërsaj a dev esse colpì vàire vire. Ch\'a deuvra un sicl \'fin\'a che (ver)\' për fé cheicòs indefinitivaman.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'S\'aversari a bogia anans e andré, lòn ch\'a rend malfé colpilo. L\'espression \'anàlisi\' a smon la distansa precisa da l\'aversari ant la diression ëspessificà.<pre>scan(0, 5)</pre>Sa distansa a l\'é pròpe cola dont ël comand \'canon\' a l\'ha damanca për tiré con precision.' : (opt_ijData.level == 4) ? 'St\'aversari a l\'é tròp leugn për dovré ël canon (ch\'a l\'ha na limitassion dë 70 méter). Al pòst, ch\'a deuvra ël comand \'noé\' për ancaminé a noé vers l\'aversari e colpilo.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'ëdcò st\'aversari-sì a l\'é tròp leugn për dovré ël canon. Ma chiel a l\'é tròp débol për dzorvive a n\'antruch. Ch\'a noa vers l\'aversari fin-a a che soa posission orisontal a sia anferior a 50. Peui \'stop\' e ch\'a deuvra ël canon.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'S\'aversari a së slontanërà cand a sarà colpì. Ch\'a noa vers ëd chiel s\'a l\'é fòra portà (70 méter).' : (opt_ijData.level == 7) ? 'Ël lapin a cor a l\'ancàpit. Peul-lo colpilo?' : (opt_ijData.level == 8) ? 'La tor as difend! Ma a bèica mach vers nòrd, sud, est e òvest.' : (opt_ijData.level == 9) ? 'Counter a bèica an tute le diression. Peul-lo deje dament a doi aversari ansema?' : (opt_ijData.level == 10) ? 'Sniper a së stërma ant un canton për sërché ij sò bërsaj. Bon-a fortun-a. Për da bon.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
