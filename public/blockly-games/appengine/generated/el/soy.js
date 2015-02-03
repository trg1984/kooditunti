// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Παιχνίδια Blocky</span><span id="Games_puzzle">Παζλ</span><span id="Games_maze">Λαβύρινθος</span><span id="Games_bird">Πουλί</span><span id="Games_turtle">Χελώνα</span><span id="Games_movie">Ταινία</span><span id="Games_pondBasic">Λίμνη</span><span id="Games_pondAdvanced">Λίμνη JS</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Αποθηκεύει και συνδέει σε μπλοκ.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Εκτέλεση Προγράμματος</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Επανεκκίνηση</span><span id="Games_help">Βοήθεια</span><span id="Games_dialogOk">Εντάξει</span><span id="Games_dialogCancel">Ακύρωση</span><span id="Games_catLogic">Λογική</span><span id="Games_catLoops">Επαναλήψεις</span><span id="Games_catMath">Μαθηματικά</span><span id="Games_catText">Κείμενο</span><span id="Games_catLists">Λίστες</span><span id="Games_catColour">Χρώμα</span><span id="Games_catVariables">Μεταβλητές</span><span id="Games_catProcedures">Συναρτήσεις</span><span id="Games_httpRequestError">Υπήρξε πρόβλημα με το αίτημα.</span><span id="Games_linkAlert">Κοινοποίησε τα μπλοκ σου με αυτόν τον σύνδεσμο:\n\n%1</span><span id="Games_hashError">Λυπάμαι, το «%1» δεν αντιστοιχεί σε κανένα αποθηκευμένο πρόγραμμα.</span><span id="Games_xmlError">Δεν μπορώ να φορτώσω το αποθηκευμένο αρχείο σου.  Μήπως δημιουργήθηκε από μία παλιότερη έκδοση του Blockly;</span><span id="Games_listVariable">λίστα</span><span id="Games_textVariable">κείμενο</span></div>';
};


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Παιχνίδια Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Ακύρωση</button><button id="doneOk" class="secondary">Εντάξει</button></div></div>';
};


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Ακύρωση</button><button id="abortOk" class="secondary">Εντάξει</button></div></div>';
};


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Εντάξει</button></div>';
};
