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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS-lampi'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Tallenna ja linkitä lohkoihin. "><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Ohje</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Käytä \'cannon\' komentoa osuaksesi kohteeseen. Ensimmäinen parametri on kulma, toinen parametri on etäisyys. Koita löytää oikea yhdistelmä.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Tähän maaliin pitää osua useita kertoja. Käytä \'while (true)\' lohkoa  toistaaksesi jotain ikuisesti.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Tämä vastustaja liikkuu edestakaisin ja on siihen on siksi vaikea osua. \'scan\' toiminto palauttaa tarkan etäisyyden vastustajaan määriteltyyn suuntaan.<pre>scan(0, 5)</pre>Tämä etäisyys on juuri mitä \'cannon\' komento tarvitsee ampuakseen tarkasti.' : (opt_ijData.level == 4) ? 'Tämä vastustaja on liian kaukana jotta voisit käyttää kanuunaa (kantama on 70 metriä). Joudut siksi käyttämään \'swim\' toimintoa uidaksesi vastustajaa kohti ja törmätäksesi siihen.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Tämä vihollinen on myös liian kaukana jotta kanuunaa voisi käyttää. Olet myös liian heikko selviytyäksesi yhteentörmäyksestä. Ui vastustajaa kohti kunnes etäisyys on vähemmän kuin 50. Pysähdy sitter ja käytä kanuunaa.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Tämä vihollinen siirtyy kauemmas kun saa osuman. Ui sitä kohti jos se on ampumasäteen ulkopuolella (70 metriä).' : (opt_ijData.level == 7) ? 'Jänis juoksentelee satunnaisesti. Onnistutko osumaan siihen?' : (opt_ijData.level == 8) ? 'Rook tappelee takaisin. Se kuitenkin katsoo vain pohjoiseen, etelään, itään ja länteen.' : (opt_ijData.level == 9) ? '\'Counter\' katselee jokaiseen suuntaan. Osaatko käyttää kahta vastustajaa yhtäaikaa?' : (opt_ijData.level == 10) ? 'Sniper on piilossa nurkassa etsimässä kohteita. Onnea. Todellakin.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
