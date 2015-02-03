// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">inicio x</span><span id="Movie_y1">inicio y</span><span id="Movie_x2">final x</span><span id="Movie_y2">final y</span><span id="Movie_radius">radio</span><span id="Movie_width">ancho</span><span id="Movie_height">altura</span><span id="Movie_circleTooltip">Dibuja un círculo en la ubicación especificada y \\ncon el radio especificado. </span><span id="Movie_circleDraw">círculo</span><span id="Movie_rectTooltip">Dibuja un rectángulo en la ubicación \\nespecificada y con el ancho y la altura \\nespecificados. </span><span id="Movie_rectDraw">rectángulo</span><span id="Movie_lineTooltip">Dibuja una línea desde un punto a otro con el \\nancho especificado. </span><span id="Movie_lineDraw">línea</span><span id="Movie_timeTooltip">Devuelve la hora actual en la animación (0-100).</span><span id="Movie_colourTooltip">Cambia el color de la pluma.</span><span id="Movie_setColour">establecer el color a</span><span id="Movie_submitDisabled">La película no se mueve. Usa los bloques para hacer algo interesante. Luego puedes enviar tu película a la galería.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Película'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Guardar y enlazar a los bloques."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Ayuda</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Abre la galería de películas en Reddit."><img src="media/1x1.gif" class="reddit icon21"> Ver galería</button></form></td><td style="text-align: center;"><button id="submitButton" title="Envía tu película a Reddit."><img src="media/1x1.gif" class="camera icon21"> Enviar a la galería</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="movie-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Usa formas simples para dibujar a esta persona.' : (opt_ijData.level == 2) ? 'Este nivel es una película. Quieres que una bola roja ruede en la pantalla. Presiona el botón reproducir para ver una vista previa.<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=movie&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22movie_time%22+x%3D%2215%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Mientras se reproduce la película, el valor del bloque \'tiempo\' cuenta de 0 a 100. Ya que quieres que la posición horizontal de la bola roja comience en 0 y vaya a 100 esto debería ser fácil.' : (opt_ijData.level == 3) ? 'El bloque \'tiempo\' cuenta de 0 a 100. Pero esta vez quieres que la posición horizontal de la bola roja comience en 100 y vaya a 0. ¿Puedes encontrar una fórmula matemática simple que cambie la dirección?' : (opt_ijData.level == 4) ? 'Usa lo aprendido en el nivel anterior para hacer cuatro bolas verdes que se muevan en las cuatro direcciones.' : (opt_ijData.level == 5) ? 'Es fácil hacer que la cabeza del ratón se mueva. ¿Puedes resolver la matemática para hacer que las orejas también se muevan?' : (opt_ijData.level == 6) ? 'Dos líneas simples. Simplemente averigua qué están haciendo los extremos de la línea.' : (opt_ijData.level == 7) ? 'La fórmula matemática para la caída de la bola es complicada. He aquí la respuesta:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>' : (opt_ijData.level == 8) ? 'Usa el bloque \'si\' para dibujar bolas rojas y azules para la primera mitad de la película. Luego dibuja una bola verde para la segunda mitad de la película.' : (opt_ijData.level == 9) ? '¿Puedes hacer una bola que siga el cable? El cable ya se dibujó. Si puedes hacer esto, puedes hacer cualquier cosa.' : (opt_ijData.level == 10) ? 'Haz una película sobre lo que quieras. Tienes muchos bloques nuevos para explorar ¡Diviértete!' + ((! opt_ijData.html) ? '<br><br>Usa el botón "See Gallery" para ver películas de otras personas. Si has hecho una película interesante, usa el botón "Enviar a la galería" para publicarla.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Película"><block type="movie_circle">' + ((opt_ijData.level != 2) ? '<value name="X"><block type="math_number"><field name="NUM">50</field></block></value>' : '') + '<value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="RADIUS"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_rect"><value name="X"><block type="math_number"><field name="NUM">50</field></block></value><value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_line"><value name="X1"><block type="math_number"><field name="NUM">40</field></block></value><value name="Y1"><block type="math_number"><field name="NUM">40</field></block></value><value name="X2"><block type="math_number"><field name="NUM">60</field></block></value><value name="Y2"><block type="math_number"><field name="NUM">60</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Color"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block>' + ((opt_ijData.level == 10) ? '<block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level > 7) ? '<category name="Lógica"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Bucles"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category>' : '') + '<category name="Matemáticas"><block type="math_number"></block><block type="math_arithmetic"></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level == 10) ? '<category name="Variables" custom="VARIABLE"></category><category name="Funciones" custom="PROCEDURE"></category>' : '') + '</xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
