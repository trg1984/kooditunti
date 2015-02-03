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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Stank JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Enrollañ ha liammañ ouzh ar bloc\'hadoù."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Skoazell</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Implijit an urzhiad "kanol" evit tizhout ar gwenn. An arventenn gentañ eo ar "c\'horn", an eil eo ar "c\'heit". Kavit ar c\'henaozad mat.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Ar c\'horn-mañ a zle bezañ tizhet meur a wech. Implijit ur rodell "keit ha ma(gwir) evit un ober un dra dizehan.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'An enebour-mañ a zo o vont war-raok ha war-gil. Gant-se ez eo diaes tizhout anezhañ. Ar bomm "dezrannañ" a zistro ar c\'heit resis d\'an enebour war an tu spisaet.<pre>scan(0, 5)</pre>An hed-tenn-mañ zo tre-ha-tre ar pezh en deus ezhomm an urzhiad "kanol" evit tennañ en un doare resis.' : (opt_ijData.level == 4) ? 'Re bell eo an eneber-mañ evit implijout ar c\'hanol (a c\'hall tennañ betek 70 m d\'ar muiañ). En e lec\'h, implijit an urzhiad "neuial" evit kregiñ da neuial war-zu an eneber ha skeiñ outañ.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Re bell eo an enebour-se evit implijout ar c\'hanol. Re wan oc\'h avat evit chom bev goude ur stokadenn. Neuiit davet an eneber keit ha ma\'z eo bihanoc\'h ho lec\'hiadur a-blaen eget 50. "paouezit" da c\'houde hag implijit ar c\'hanol.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Pellaat a ray an eneber-mañ pa vo skoet outañ. Neuit davetañ ma\'z eo dreist diraez (70 metr).' : (opt_ijData.level == 7) ? 'Redek a ra al lapin war-bouez e benn. C\'hoant ho peus da skeiñ outañ ?' : (opt_ijData.level == 8) ? 'En em zifenn a ra an tour ! Ne sell avat nemet war-zu an norzh, ar su, ar reter hag ar c\'hornôg.' : (opt_ijData.level == 9) ? 'Sellet a ra Counter a sell e pep lec\'h. Ha gallout a reot merañ  daou eneber war un dro ?' : (opt_ijData.level == 10) ? 'Emañ an tenner o kuzhat en ur c\'horn evit klask war-lerc\'h e wennoù. Chañs vat.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
