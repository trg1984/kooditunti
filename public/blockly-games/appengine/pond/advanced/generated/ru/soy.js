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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Пруд JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Сохранить и показать ссылку на блоки."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Справка</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Используй команду \'cannon\', чтобы поразить цель. Первый параметр - угол, второй - расстояние. Найди правильное сочетание.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Эта цель должна быть поражена много раз. Используй цикл \'while (true)\', чтобы делать что-то бесконечно.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Этот противник двигается взад-вперёд, из-за чего в него трудно попасть. Выражение \'scan\' возвращает точное расстояние до противника в указанном направлении.<pre>scan(0, 5)</pre>Расстояние - именно то, что нужно команде \'cannon\' для точной стрельбы.' : (opt_ijData.level == 4) ? 'Этот противник слишком далеко, чтобы использовать пушку (которая имеет ограничение 70 метров). Вместо этого, используй команду \'swim\', чтобы плыть в сторону противника и врезаться в него.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Этот противник тоже слишком далеко, чтобы использовать пушки. Но ты слишком слаб, чтобы выжить в столкновении. Плыви в сторону противника, пока твоё горизонтальное положение меньше 50. Затем "stop" и используй пушки.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Этот противник будет отходить, когда в него попали. Плыви вперед, если он находится вне диапазона (70 метров).' : (opt_ijData.level == 7) ? 'Кролик бегает случайный образом. Можешь его подстрелить?' : (opt_ijData.level == 8) ? 'Шулер огрызается! Но он смотрит только на север, юг, восток и запад.' : (opt_ijData.level == 9) ? 'Счетчик смотрит во всех направлениях. Можешь справиться с двумя противниками сразу?' : (opt_ijData.level == 10) ? 'Снайпер прячется в углу, высматривая цель. Удачи. Серьёзно.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
