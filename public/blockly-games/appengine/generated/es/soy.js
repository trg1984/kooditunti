// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Juegos de Blockly</span><span id="Games_puzzle">Rompecabezas</span><span id="Games_maze">Laberinto</span><span id="Games_bird">Pájaro</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Película</span><span id="Games_pondBasic">Estanque</span><span id="Games_pondAdvanced">Estanque JS</span><span id="Games_linesOfCode1">Resolviste este nivel con 1 línea de JavaScript:</span><span id="Games_linesOfCode2">Resolviste este nivel con %1 líneas de JavaScript:</span><span id="Games_nextLevel">¿Estás listo/a para el nivel %1?</span><span id="Games_finalLevel">¿Estás listo/a para el siguiente desafío?</span><span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span><span id="Games_runTooltip">Ejecutar el programa que escribiste.</span><span id="Games_runProgram">Ejecutar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Restablecer</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceptar</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">Lógica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matemáticas</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema con la petición.</span><span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span><span id="Games_hashError">«%1» no corresponde con ningún programa guardado.</span><span id="Games_xmlError">No se pudo cargar el archivo guardado.  ¿Quizá fue creado con otra versión de Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Juegos de Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">¡Felicitaciones!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">Aceptar</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Este nivel es extremadamente difícil. ¿Deseas saltearlo e ir al siguiente nivel? Siempre puedes regresar más adelante.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">Aceptar</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div>';
};
