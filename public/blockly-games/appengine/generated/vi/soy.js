// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Trò Chơi</span><span id="Games_puzzle">Đố vui</span><span id="Games_maze">Ma trận</span><span id="Games_bird">Chim</span><span id="Games_turtle">Rùa</span><span id="Games_movie">Phim</span><span id="Games_pondBasic">Ao hồ</span><span id="Games_pondAdvanced">JS ao hồ</span><span id="Games_linesOfCode1">Bạn đã xử lý level này với 1 dòng của JavaScript:</span><span id="Games_linesOfCode2">Bạn đã xử lý level này với %1 dòng của JavaScript:</span><span id="Games_nextLevel">Bạn có sẵn sàng cho level %1 chưa?</span><span id="Games_finalLevel">Bạn có sẵn sàng cho level tiếp theo chưa?</span><span id="Games_linkTooltip">Lưu và lấy địa chỉ liên kết.</span><span id="Games_runTooltip">Chạy chương trình bạn viết.</span><span id="Games_runProgram">Chạy chương trình</span><span id="Games_resetTooltip">Dừng chương trình và thiết lập lại level.</span><span id="Games_resetProgram">Làm lại</span><span id="Games_help">Trợ giúp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Hủy</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Vòng lặp</span><span id="Games_catMath">Công thức toán</span><span id="Games_catText">Văn bản</span><span id="Games_catLists">Danh sách</span><span id="Games_catColour">Màu</span><span id="Games_catVariables">Biến</span><span id="Games_catProcedures">Hàm</span><span id="Games_httpRequestError">Hoạt động bị trục trặc, không thực hiện được yêu cầu của bạn.</span><span id="Games_linkAlert">Chia sẻ chương trình của bạn với liên kết sau:\n\n %1</span><span id="Games_hashError">Không tìm thấy chương trình được lưu ở \'%1\'.</span><span id="Games_xmlError">Không mở được chương trình của bạn.  Có thể nó nằm trong một phiên bản khác của Blockly?</span><span id="Games_listVariable">danh sách</span><span id="Games_textVariable">văn bản</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Trò Chơi</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Chúc mừng!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Hủy</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Level này rất khó. Bạn có muốn bỏ qua và chuyển sang trò chơi tiếp theo? Bạn có thể quay lại level này sau.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Hủy</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
