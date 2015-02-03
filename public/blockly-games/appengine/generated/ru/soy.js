// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Игры Blockly</span><span id="Games_puzzle">Головоломка</span><span id="Games_maze">Лабиринт</span><span id="Games_bird">Птица</span><span id="Games_turtle">Черепашка</span><span id="Games_movie">Фильм</span><span id="Games_pondBasic">Пруд</span><span id="Games_pondAdvanced">Пруд JS</span><span id="Games_linesOfCode1">Ты решил задачу на этом уровне одной строкой на JavaScript.</span><span id="Games_linesOfCode2">Ты решил этот уровень. Число строк кода на JavaScript - %1:</span><span id="Games_nextLevel">Ты готов к уровню %1?</span><span id="Games_finalLevel">Ты готов к следующему испытанию?</span><span id="Games_linkTooltip">Сохранить и показать ссылку на блоки.</span><span id="Games_runTooltip">Запусти написанную тобой программу.</span><span id="Games_runProgram">Запустить Программу</span><span id="Games_resetTooltip">Прерывает программу и сбрасывает в начальное \\nсостояние. </span><span id="Games_resetProgram">Сбросить</span><span id="Games_help">Справка</span><span id="Games_dialogOk">Вернуться</span><span id="Games_dialogCancel">Отмена</span><span id="Games_catLogic">Логика</span><span id="Games_catLoops">Циклы</span><span id="Games_catMath">Математика</span><span id="Games_catText">Текст</span><span id="Games_catLists">Списки</span><span id="Games_catColour">Цвет</span><span id="Games_catVariables">Переменные</span><span id="Games_catProcedures">Функции</span><span id="Games_httpRequestError">Произошла проблема при запросе.</span><span id="Games_linkAlert">Поделитесь своими блоками по этой ссылке:\n\n%1</span><span id="Games_hashError">К сожалению, \'%1\' не соответствует ни одному сохраненному файлу Блокли.</span><span id="Games_xmlError">Не удалось загрузить ваш сохраненный файл.  Возможно, он был создан в другой версии Блокли?</span><span id="Games_listVariable">список</span><span id="Games_textVariable">текст</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Игры Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Поздравляем!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Отмена</button><button id="doneOk" class="secondary">Вернуться</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Этот уровень очень сложен. Может, ты хочешь пропустить его и перейти к следующей игре? Ты всегда можешь вернуться сюда позже.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Отмена</button><button id="abortOk" class="secondary">Вернуться</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Вернуться</button></div>';
};
