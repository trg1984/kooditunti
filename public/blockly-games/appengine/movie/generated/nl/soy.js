// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">beginpunt x</span><span id="Movie_y1">beginpunt y</span><span id="Movie_x2">eindpunt x</span><span id="Movie_y2">eindpunt y</span><span id="Movie_radius">straal</span><span id="Movie_width">breedte</span><span id="Movie_height">hoogte</span><span id="Movie_circleTooltip">Maakt een cirkel op de opgegeven plaats en met \\nde opgegeven radius. </span><span id="Movie_circleDraw">cirkel</span><span id="Movie_rectTooltip">Maakt een rechthoek op de opgegeven plaats en \\nmet de opgegeven breedte en hoogte. </span><span id="Movie_rectDraw">rechthoek</span><span id="Movie_lineTooltip">Maakt een lijn van het ene punt naar het andere \\nmet de opgegeven breedte. </span><span id="Movie_lineDraw">lijn</span><span id="Movie_timeTooltip">Geeft de huidige tijd terug in de animatie (0-100).</span><span id="Movie_colourTooltip">Wijzigt de kleur van de pen.</span><span id="Movie_setColour">stel kleur in op</span><span id="Movie_submitDisabled">Je filmpje beweegt niet Gebruik blokken om iets interessants te maken. Daarna kan je je filmpje opslaan in de galerij.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Film'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Opslaan en koppelen naar blokken."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Hulp</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Open de filmpjesgalerij op Reddit."><img src="media/1x1.gif" class="reddit icon21"> Galerij bekijken</button></form></td><td style="text-align: center;"><button id="submitButton" title="Sla je filmpje op op Reddit."><img src="media/1x1.gif" class="camera icon21"> Opslaan in galerij</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="movie-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Gebruik eenvoudige vormen om deze persoon te tekenen.' : (opt_ijData.level == 2) ? 'Dit niveau is een filmpje. Je wilt een rode bal over het scherm laten rollen. Klik op de knop afspelen om een voorvertoning te bekijken.<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=movie&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22movie_time%22+x%3D%2215%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Terwijl de film wordt afgespeeld, telt de waarde van het "tijd"-blok van 0 tot 100. Omdat je wilt dat de horizontale positie van de rode bal begint op 0 en eindigt bij 100 moet dit makkelijk zijn.' : (opt_ijData.level == 3) ? 'Het "tijd"-blok telt van 0 tot 100. Maar nu wil je dat de horizontale positie van de rode bal begint bij 100 en naar 0 gaat. Kan je een eenvoudige wiskundige formule vinden die de richting omkeert?' : (opt_ijData.level == 4) ? 'Gebruik wat je hebt geleerd in het vorige niveau om vier groene ballen te maken die in alle vier de richtingen bewegen.' : (opt_ijData.level == 5) ? 'Het laten bewegen van het hoofd van de muis is eenvoudig. Kan je uitvinden hoe je met wiskunde de oren van de muis ook kunt laten bewegen?' : (opt_ijData.level == 6) ? 'Twee eenvoudige regels. Probeer er achter te komen wat de regeleindes betekenen.' : (opt_ijData.level == 7) ? 'De wiskundige formule voor deze vallende bal is ingewikkeld. Hier is het antwoord:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>' : (opt_ijData.level == 8) ? 'Gebruik het "als"-blok om rode en blauwe ballen te tekenen in de eerste helft van de film. Teken daarna een groene bal in het tweede deel van de film.' : (opt_ijData.level == 9) ? 'Kan je een bal maken die de draad volgt? De draad is al voor je getekend. Zodra je dit kan, kan je alles.' : (opt_ijData.level == 10) ? 'Maak een filmpje over wat je maar wilt. Je hebt een groot aantal nieuwe blokken tot je beschikking. Veel plezier!' + ((! opt_ijData.html) ? '<br><br>Gebruik de knop "Galerij bekijken" om de filmpjes te bekijken die andere mensen hebben gemaakt. Als je zelf een interessant filmpje hebt egmaakt, klik dan op de knop "In galerij opslaan" om het te delen.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Film"><block type="movie_circle">' + ((opt_ijData.level != 2) ? '<value name="X"><block type="math_number"><field name="NUM">50</field></block></value>' : '') + '<value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="RADIUS"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_rect"><value name="X"><block type="math_number"><field name="NUM">50</field></block></value><value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_line"><value name="X1"><block type="math_number"><field name="NUM">40</field></block></value><value name="Y1"><block type="math_number"><field name="NUM">40</field></block></value><value name="X2"><block type="math_number"><field name="NUM">60</field></block></value><value name="Y2"><block type="math_number"><field name="NUM">60</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Kleur"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block>' + ((opt_ijData.level == 10) ? '<block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level > 7) ? '<category name="Logica"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Lussen"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category>' : '') + '<category name="Formules"><block type="math_number"></block><block type="math_arithmetic"></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level == 10) ? '<category name="Variabelen" custom="VARIABLE"></category><category name="Functies" custom="PROCEDURE"></category>' : '') + '</xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
