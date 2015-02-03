// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Oyunlar</span><span id="Games_puzzle">Bulmaca</span><span id="Games_maze">Labirent</span><span id="Games_bird">Kuş</span><span id="Games_turtle">Kaplumbağa</span><span id="Games_movie">Film</span><span id="Games_pondBasic">Gölet</span><span id="Games_pondAdvanced">JS Göleti</span><span id="Games_linesOfCode1">Bu seviyeyi 1 satır JavaScript ile çözdünüz:</span><span id="Games_linesOfCode2">Bu seviyeyi %1 satır JavaScript ile çözdünüz:</span><span id="Games_nextLevel">%1. seviye için hazır mısınız?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Blokları ve bağlantı adresini kaydet.</span><span id="Games_runTooltip">Yazdığın programı çalıştır.</span><span id="Games_runProgram">Programı Çalıştır</span><span id="Games_resetTooltip">Programı durdur ve seviyeyi sıfırla.</span><span id="Games_resetProgram">Tekrar</span><span id="Games_help">Yardım</span><span id="Games_dialogOk">TAMAM</span><span id="Games_dialogCancel">İptal</span><span id="Games_catLogic">Mantık</span><span id="Games_catLoops">Döngüler</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Metin</span><span id="Games_catLists">Listeler</span><span id="Games_catColour">Renk</span><span id="Games_catVariables">Değişkenler</span><span id="Games_catProcedures">İşlevler</span><span id="Games_httpRequestError">İstek ile ilgili bir problem var.</span><span id="Games_linkAlert">Bloklarını bu bağlantı ile paylaş:\n\n%1</span><span id="Games_hashError">Üzgünüz, \'%1\' hiç bir kaydedilmiş program ile uyuşmuyor.</span><span id="Games_xmlError">Kaydedilen dosyanız yüklenemiyor\nBlockly\'nin önceki sürümü ile kaydedilmiş olabilir mi?</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">metin</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Oyunlar</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit124 = opt_data.maxLevel + 1;
  for (var i124 = 1; i124 < iLimit124; i124++) {
    output += ' ' + ((i124 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i124) + '">' + soy.$$escapeHtml(i124) + '</span>' : (i124 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i124) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i124) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i124) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i124) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i124) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Tebrikler!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">İptal</button><button id="doneOk" class="secondary">TAMAM</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Bu seviye son derece zordur. Bunu atlayıp bir sonraki oyuna gitmek ister misin? Her zaman daha sonra geri gelebilirsin.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">İptal</button><button id="abortOk" class="secondary">TAMAM</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">TAMAM</button></div>';
};
