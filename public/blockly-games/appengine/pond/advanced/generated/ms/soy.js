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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS Pond'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Simpan dan pautkan kepada blok."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Bantuan</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Gunakan perintah \'cannon\' untuk mengena sasaran. Parameter pertama ialah sudut, parameter kedua ialah jarak. Dapatkan kombinasi yang tepat.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Sasaran mesti dikena berkali-kali. Gunakan ulangan \'while (true)\' untuk melakukan sesuatu tanpa henti-henti.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Lawan bergerak mundar-mandir, oleh itu sukar ditembak. Ungkapan \'scan\' menghasilkan jarak tepat kepada lawan dalam arah yang ditentukan.<pre>scan(0, 5)</pre>Jarak ini menepati apa yang diperlukan oleh perintah \'cannon\' untuk menembak dengan tepat.' : (opt_ijData.level == 4) ? 'Lawan ini terlalu jauh dari capaian meriam (dengan had 70 meter). Oleh itu gunakan perintah \'swim\' untuk mula berenang ke arah lawan hingga melanggarnya.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Lawan ini juga terlalu jauh dari capaian meriam. Tetapi anda terlalu lemah untuk terselamat dari pelanggaran. Berenang ke arah lawan sedangkan lokasi mendatar anda kurang daripada 50. Kemudian \'stop\' dan gunakan meriam.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Lawan ini akan berganjak apabila ditembak. Renang ke arahnya jika ia di luar jarak tembakan (70 meter).' : (opt_ijData.level == 7) ? 'Rabbit berkeliaran ke sana-sini. Mampukah anda menembaknya?' : (opt_ijData.level == 8) ? 'Rook menyerang balas! Tetapi ia hanya memandang ke utara, selatan, timur dan barat.' : (opt_ijData.level == 9) ? 'Counter memandang ke semua arah. Mampukah anda menentang dua lawan sekali gus?' : (opt_ijData.level == 10) ? 'Sniper menyorok di tepi mencari-cari sasaran. Tolong jaga diri baik-baik.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
