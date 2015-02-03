// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">بازی\u200Cهای بستن</span><span id="Games_puzzle">پازل</span><span id="Games_maze">پیچ\u200Cدرپیچ</span><span id="Games_bird">پرنده</span><span id="Games_turtle">لاک\u200Cپشت</span><span id="Games_movie">فیلم</span><span id="Games_pondBasic">تالاب</span><span id="Games_pondAdvanced">جاواسکریپت تالاب</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">ذخیره و پیوند به بلوک\u200Cها.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">اجرای برنامه</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">از نو</span><span id="Games_help">راهنما</span><span id="Games_dialogOk">تأیید</span><span id="Games_dialogCancel">لغو</span><span id="Games_catLogic">منطق</span><span id="Games_catLoops">حلقه\u200Cها</span><span id="Games_catMath">ریاضی</span><span id="Games_catText">متن</span><span id="Games_catLists">فهرست\u200Cها</span><span id="Games_catColour">رنگ</span><span id="Games_catVariables">متغییرها</span><span id="Games_catProcedures">توابع</span><span id="Games_httpRequestError">مشکلی با درخواست وجود داشت.</span><span id="Games_linkAlert">اشتراک\u200Cگذاری بلاک\u200Cهایتان با این پیوند:\n\n%1</span><span id="Games_hashError">شرمنده، «%1» با هیچ برنامهٔ ذخیره\u200Cشده\u200Cای تطبیق پیدا نکرد.</span><span id="Games_xmlError">نتوانست پروندهٔ ذخیرهٔ شما بارگیری شود.  احتمالاً با نسخهٔ متفاوتی از بلوکی درست شده\u200Cاست؟</span><span id="Games_listVariable">فهرست</span><span id="Games_textVariable">متن</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'بازی\u200Cهای بستن</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">لغو</button><button id="doneOk" class="secondary">تأیید</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">لغو</button><button id="abortOk" class="secondary">تأیید</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">تأیید</button></div>';
};
