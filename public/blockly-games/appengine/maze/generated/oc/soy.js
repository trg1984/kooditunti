// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">avança</span><span id="Maze_turnLeft">vira a esquèrra</span><span id="Maze_turnRight">vira a drecha</span><span id="Maze_doCode">far</span><span id="Maze_elseCode">siquenon</span><span id="Maze_helpIfElse">Un blòt \'Se-Siquenon\' executa una causa o una autra.</span><span id="Maze_pathAhead">se camin davant</span><span id="Maze_pathLeft">se camin cap a esquèrra</span><span id="Maze_pathRight">se camin cap a drecha</span><span id="Maze_repeatUntil">repetís fins a</span><span id="Maze_moveForwardTooltip">Fa avançar sénher Pegman en avant d\'un espaci.</span><span id="Maze_turnTooltip">Fa virar sénher Pegman a esquèrra o a drecha de \\n90 grases. </span><span id="Maze_ifTooltip">Se i a un camin dins la direccion especificada, \\nalara efectua aquelas accions. </span><span id="Maze_ifelseTooltip">Se i a un camin dins la direccion especificada, \\nalara fasètz lo premièr blòt d\'accions. \\nSiquenon fasètz lo segond blòt d\'accions. </span><span id="Maze_whileTooltip">Repetíse los blòts que son a l\'interior fins a \\naténher la tòca. </span><span id="Maze_capacity0">Te demòra %0 blòt.</span><span id="Maze_capacity1">Te demòra %1 blòt.</span><span id="Maze_capacity2">Te demòran %2 blòts.</span></div>';
};


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Laberint'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salva e liga als blòts."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Far far al jogaire çò que los blòts dison."><img src="media/1x1.gif" class="run icon21"> Executa lo programa</button><button id="resetButton" class="primary" style="display: none" title="Replaçar lo jogaire al començament del laberint."><img src="media/1x1.gif" class="stop icon21"> Reïnicializar</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Empilar dos blòts d\'instruccions \'avança\' per m\'ajudar a aténher ma tòca.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Dins aqueste nivèl, avètz besonh d\'empilar los blòts los uns en dessús dels autres dins la zòna de trabalh blanca.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Los ordenadors an pas gaire de memòria. Utilizatz solament dos blòts per aténher la tòca. Utilizatz lo blòt \'repetís\' per executar un blòt mai d\'un còp.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 4) ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Podètz metre mai d’un blòt dins un blòt « repetir ».</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Un blòt \'Se-Siquenon\' executa una causa o una autra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


Maze.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
