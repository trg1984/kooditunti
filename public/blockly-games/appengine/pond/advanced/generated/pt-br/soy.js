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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Lagoa JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salvar e ligar aos blocos."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Ajuda</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Use o comando \'cannon\' para atingir o alvo. O primeiro parametro é o angulo, o segundo é o alcance. Ache a conbinação correta.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Este alvo deve ser acertado várias vezes. Use \'while  (true)\' loop para fazer algo indefinidamente.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Esse oponente move-se para frente e para trás, fazendo ficar dificil acertá-lo. A Expressão \'scan\' retorna o alcance exato do oponente naquela direção.<pre>scan(0, 5)</pre>Este alcance é exatamente o que o comando \'cannon\' precisa para atirar precisamente.' : (opt_ijData.level == 4) ? 'Esse oponente está muito longe para usar o canhão (que tem um alcance de 70 metros). Invés disso, use o comando \'swim\' para começar a nadar até o oponente e trombar nele.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Este oponente tambem esta muito longe para usar o canhão. Mas você esta muito fráco para sobreviver de uma colissão. Nade até o oponente enquanto sua possição horizontal e menor que 50. Então pare e use o canhão.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Este oponente irá se mover para longe quando golpeado. Nade até ele se está fora do alcance (70 metros).' : (opt_ijData.level == 7) ? 'Coelhos correm por qualquer lado. Você consegue acertá-los?' : (opt_ijData.level == 8) ? 'a torre contra-ataca! Mas ela so olha para o norte, sul, leste e oeste.' : (opt_ijData.level == 9) ? 'O contador mira em todas as direções. Você consegue controlar dois oponentes ao mesmo tempo?' : (opt_ijData.level == 10) ? 'O Franco-atirador se esconde em esquinas procurando por alvos. Boa sorte. Sério.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
