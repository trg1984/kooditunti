// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">mou endavant</span><span id="Maze_turnLeft">gira esquerra</span><span id="Maze_turnRight">gira dreta</span><span id="Maze_doCode">fes</span><span id="Maze_elseCode">si no</span><span id="Maze_helpIfElse">Les declaracions \'si-si no\' faran fer una cosa o una altra.</span><span id="Maze_pathAhead">al davant</span><span id="Maze_pathLeft">si camí a l\'esquerra</span><span id="Maze_pathRight">si camí a la dreta</span><span id="Maze_repeatUntil">repeteix fins al</span><span id="Maze_moveForwardTooltip">Mou el Pegman endavant un espai.</span><span id="Maze_turnTooltip">Gira el Pegman a l\'esquerra o a la dreta 90 graus.</span><span id="Maze_ifTooltip">Si hi ha un camí en la direcció especificada, \\nllavors fes algunes accions. </span><span id="Maze_ifelseTooltip">Si hi ha un camí en la direcció especificada, \\nllavors fes el primer bloc d\'accions. \\nSi no, fes el segon bloc d\'accions. </span><span id="Maze_whileTooltip">Repeteix les accions de dins del bloc fins \\narribar al punt final. </span><span id="Maze_capacity0">Et resten %0 blocs.</span><span id="Maze_capacity1">Et resten %1 blocs.</span><span id="Maze_capacity2">Et resten %2 blocs.</span></div>';
};


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Laberint'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Desa i enllaça als blocs."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Fa que el jugador faci el que diuen els blocs."><img src="media/1x1.gif" class="run icon21"> Executa el programa</button><button id="resetButton" class="primary" style="display: none" title="Col·loca el jugador a l\'inici del laberint."><img src="media/1x1.gif" class="stop icon21"> Reinicialitza</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Apila un parell de blocs \'mou endavant\' junts per ajudar-me a arribar a la meta.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>En aquest nivell, has d\'apilar junts tots els blocs a l\'espai de treball blanc.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Executeu el vostre programa per veure què passa.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>El vostre programa no ha resolt el laberint. Cliqueu \'Reinicialitza\' i torneu a intentar-ho.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Els ordinadors tenen una memòria limitada. Arriba al final d\'aquest camí utilitzant només dos blocs. Utilitza \'repeteix\' per a executar un bloc més d\'una vegada.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 4) ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Heu usat tots els blocs per aquest nivell. Per crear un nou bloc, primer heu d\'esborrar un bloc existent.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Podeu encabit més d\'un bloc dins d\'un bloc \'repeteix\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>Escolliu el vostre jugador favorit en aquest menú.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Una condició \'si\' farà fer alguna cosa només si la condició és certa. Prova de girar a l\'esquerra si hi ha un camí a l\'esquerra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Feu clic a %1 en el bloc \'si\' per canviar-ne la condició.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Les declaracions \'si-si no\' faran fer una cosa o una altra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Pots resoldre aquest complicat laberint? Prova de seguir la paret de l\'esquerra. Només programadors avançats!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


Maze.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
