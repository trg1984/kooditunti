// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Jogos do Blockly</span><span id="Games_puzzle">Quebra-Cabeça</span><span id="Games_maze">Labirinto</span><span id="Games_bird">Pássaro</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Filme</span><span id="Games_pondBasic">Lagoa</span><span id="Games_pondAdvanced">Lagoa JS</span><span id="Games_linesOfCode1">Você solucionou esse nivel com uma linha de JavaScript:</span><span id="Games_linesOfCode2">Você solucionou esse nivel com uma linha de JavaScript:</span><span id="Games_nextLevel">Você esta preparado para o nivel %1?</span><span id="Games_finalLevel">Você esta preparado para o proximo desafio?</span><span id="Games_linkTooltip">Salvar e ligar aos blocos.</span><span id="Games_runTooltip">Rodar o programa que vocÊ escreveu.</span><span id="Games_runProgram">Executar o programa</span><span id="Games_resetTooltip">Parar a execução do programa e resetar o nivel.</span><span id="Games_resetProgram">Reiniciar</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">Lógica</span><span id="Games_catLoops">Laços</span><span id="Games_catMath">Matemática</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Cor</span><span id="Games_catVariables">Variáveis</span><span id="Games_catProcedures">Funções</span><span id="Games_httpRequestError">Houve um problema com a requisição.</span><span id="Games_linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="Games_hashError">Desculpe, \'%1\' não corresponde a um programa salvo.</span><span id="Games_xmlError">Não foi possível carregar seu arquivo salvo. Talvez ele tenha sido criado com uma versão diferente do Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Jogos do Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Parabéns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Este nivel é extremamente dificil. Você deseja pula-lo e ir para o proximo jogo? Você sempre pode voltar depois.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">OK</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
