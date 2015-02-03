// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored) {
  return BlocklyGames.soy.messages(null) + '<div style="display: none"><span id="Pond_playerName">ДжэгуакIуэ</span><span id="Pond_targetName">Нэщэнэ</span><span id="Pond_rabbitName">ТхьэкIумэкIыхь</span><span id="Pond_counterName">Counter</span><span id="Pond_rookName">Шы</span><span id="Pond_sniperName">Шэрыуэ</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span></div>';
};


Pond.soy.visualization = function(opt_data, opt_ignored) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="playerStatTable"><tbody><tr id="playerStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">ТхылъымпIэхэр</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Программэр егъэжьэн</button><button id="resetButton" class="primary" style="display: none" title="Программэр къэгъэувыIауэ здынэсари щыгъэгъупщэн."><img src="media/1x1.gif" class="stop icon21"> Псори щыгъэгъупщэн</button></td></tr></table><div id="dialogDocs"><img src="media/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};


Pond.soy.helpUseScan = function(opt_data, opt_ignored) {
  return '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>' + BlocklyGames.soy.ok(null) + '</div>';
};


Pond.soy.playerTarget = function(opt_data, opt_ignored) {
  return '\n<div id="playerTarget" style="display: none">\n</div>\n';
};


Pond.soy.playerRabbit = function(opt_data, opt_ignored) {
  return '\n<div id="playerRabbit" style="display: none">\n/* rabbit */\n// rabbit runs around the field, randomly and never fires; use as a target.\n\n/* go - go to the point specified */\nfunction go (dest_x, dest_y) {\n  var course = plot_course(dest_x, dest_y);\n  while (distance(loc_x(), loc_y(), dest_x, dest_y) > 5) {\n    drive(course, 25);\n  }\n  while (speed() > 0) {\n    drive(course, 0);\n  }\n}\n\n/* distance forumula. */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot_course - figure out which heading to go. */\nfunction plot_course(xx, yy) {\n  var d;\n  var curx = loc_x();\n  var cury = loc_y();\n  var x = curx - xx;\n  var y = cury - yy;\n\n  if (x == 0) {\n    if (yy > cury) {\n      d = 90;\n    } else {\n      d = 270;\n    }\n  } else {\n    if (yy < cury) {\n      if (xx > curx) {\n        d = 360 + Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    } else {\n      if (xx > curx) {\n        d = Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    }\n  }\n  return d;\n}\n\nwhile (true) {\n  // Go somewhere in the field.\n  var x = Math.random() * 100;\n  var y = Math.random() * 100;\n  go(x, y);\n}\n</div>\n';
};


Pond.soy.playerCounter = function(opt_data, opt_ignored) {
  return '\n<div id="playerCounter" style="display: none">\n/* counter */\n/* scan in a counter-clockwise direction (increasing degrees) */\n/* moves when hit */\n\nvar range;\nvar last_dir = 0;\n\nvar res = 2;\nvar d = damage();\nvar angle = Math.random() * 360;\nwhile (true) {\n  while ((range = scan(angle, res)) != Infinity) {\n    if (range > 70) { /* out of range, head toward it */\n      drive(angle, 50);\n      var i = 1;\n      while (i++ < 50) /* use a counter to limit move time */\n        ;\n      drive (angle, 0);\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 3;\n    } else {\n      while (!cannon(angle, range))\n        ;\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 15;\n    }\n  }\n  if (d != damage()) {\n    d = damage();\n    run();\n  }\n  angle += res;\n  angle %= 360;\n}\n\n/* run moves around the center of the field */\nfunction run() {\n  var i = 0;\n  var x = loc_x();\n  var y = loc_y();\n\n  if (last_dir == 0) {\n    last_dir = 1;\n    if (y > 51) {\n      drive(270, 100);\n      while (y - 10 < loc_y() && i++ < 50)\n        ;\n      drive(270, 0);\n    } else {\n      drive(90, 100);\n      while (y + 10 > loc_y() && i++ < 50)\n        ;\n      drive(90, 0);\n    }\n  } else {\n    last_dir = 0;\n    if (x > 51) {\n      drive(180, 100);\n      while (x - 10 < loc_x() && i++ < 50)\n        ;\n      drive(180, 0);\n    } else {\n      drive(0, 100);\n      while (x + 10 > loc_x() && i++ < 50)\n        ;\n      drive(0, 0);\n    }\n  }\n}\n</div>\n';
};


Pond.soy.playerRook = function(opt_data, opt_ignored) {
  return '\n<div id="playerRook" style="display: none">\n/* rook.r  -  scans the battlefield like a rook, i.e., only 0,90,180,270 */\n/* move horizontally only, but looks horz and vertically */\n\n/* move to center of board */\nif (loc_y() < 50) {\n  while (loc_y() < 40)        /* stop near center */\n    drive(90, 100);           /* start moving */\n} else {\n  while (loc_y() > 60)        /* stop near center */\n    drive(270, 100);          /* start moving */\n}\ndrive(0, 0);\nwhile (speed() > 0)\n  ;\n\n/* initialize starting parameters */\nvar d = damage();\nvar course = 0;\nvar boundary = 99;\ndrive(course, 30);\n\n/* main loop */\nwhile(true) {\n  /* look all directions */\n  look(0);\n  look(90);\n  look(180);\n  look(270);\n\n  /* if near end of battlefield, change directions */\n  if (course == 0) {\n    if (loc_x() > boundary || speed() == 0)\n      change();\n  }\n  else {\n    if (loc_x() < boundary || speed() == 0)\n      change();\n  }\n}\n\n/* look somewhere, and fire cannon repeatedly at in-range target */\nfunction look(deg) {\n  var range;\n  while ((range = scan(deg, 4)) <= 70)  {\n    drive(course, 0);\n    cannon(deg, range);\n    if (d + 20 != damage()) {\n      d = damage();\n      change();\n    }\n  }\n}\n\nfunction change() {\n  if (course == 0) {\n    boundary = 1;\n    course = 180;\n  } else {\n    boundary = 99;\n    course = 0;\n  }\n  drive(course, 30);\n}\n</div>\n';
};


Pond.soy.playerSniper = function(opt_data, opt_ignored) {
  return '\n<div id="playerSniper" style="display: none">\n/* sniper */\n/* strategy: since a scan of the entire battlefield can be done in 90 */\n/* degrees from a corner, sniper can scan the field quickly. */\n\n/* external variables, that can be used by any function */\nvar corner = 0;           /* current corner 0, 1, 2, or 2 */\nvar sc = 0;               /* current scan start */\n\nvar range;          /* range to target */\n\n/* initialize the corner info */\n/* x and y location of a corner, and starting scan degree */\nvar c1x = 2,  c1y = 2,  s1 = 0;\nvar c2x = 2,  c2y = 98, s2 = 270;\nvar c3x = 98, c3y = 98, s3 = 180;\nvar c4x = 98, c4y = 2,  s4 = 90;\nvar closest = Infinity;\nnew_corner();       /* start at a random corner */\nvar d = damage();       /* get current damage */\nvar dir = sc;           /* starting scan direction */\n\nwhile (true) {         /* loop is executed forever */\n  while (dir < sc + 90) {  /* scan through 90 degree range */\n    range = scan(dir, 2);   /* look at a direction */\n    if (range <= 70) {\n      while (range > 0) {    /* keep firing while in range */\n        closest = range;     /* set closest flag */\n        cannon(dir, range);   /* fire! */\n        range = scan(dir, 1); /* check target again */\n        if (d + 15 > damage())  /* sustained several hits, */\n          range = 0;            /* goto new corner */\n      }\n      dir -= 10;             /* back up scan, in case */\n    }\n\n    dir += 2;                /* increment scan */\n    if (d != damage()) {     /* check for damage incurred */\n      new_corner();          /* we\'re hit, move now */\n      d = damage();\n      dir = sc;\n    }\n  }\n\n  if (closest == Infinity) {       /* check for any targets in range */\n    new_corner();             /* nothing, move to new corner */\n    d = damage();\n    dir = sc;\n  } else {                     /* targets in range, resume */\n    dir = sc;\n  }\n  closest = Infinity;\n}\n\n/* new corner function to move to a different corner */\nfunction new_corner() {\n  var x, y;\n\n  var rand = Math.floor(Math.random() * 4);           /* pick a random corner */\n  if (rand == corner)       /* but make it different than the */\n    corner = (rand + 1) % 4;/* current corner */\n  else\n    corner = rand;\n  if (corner == 0) {       /* set new x,y and scan start */\n    x = c1x;\n    y = c1y;\n    sc = s1;\n  }\n  if (corner == 1) {\n    x = c2x;\n    y = c2y;\n    sc = s2;\n  }\n  if (corner == 2) {\n    x = c3x;\n    y = c3y;\n    sc = s3;\n  }\n  if (corner == 3) {\n    x = c4x;\n    y = c4y;\n    sc = s4;\n  }\n\n  /* find the heading we need to get to the desired corner */\n  var angle = plot_course(x,y);\n\n  /* start drive train, full speed */\n\n  /* keep traveling until we are within 15 meters */\n  /* speed is checked in case we run into wall, other robot */\n  /* not terribly great, since were are doing nothing while moving */\n\n  while (distance(loc_x(), loc_y(), x, y) > 15)\n    drive(angle, 100);\n\n  /* cut speed, and creep the rest of the way */\n\n  while (distance(loc_x(), loc_y(), x, y) > 1)\n    drive(angle, 20);\n\n  /* stop drive, should coast in the rest of the way */\n  drive(angle, 0);\n}  /* end of new_corner */\n\n/* classical pythagorean distance formula */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot course function, return degree heading to */\n/* reach destination x, y; uses atan() trig function */\nfunction plot_course(xx, yy) {\n  var d;\n  var x,y;\n  var curx, cury;\n\n  curx = loc_x();  /* get current location */\n  cury = loc_y();\n  x = curx - xx;\n  y = cury - yy;\n\n  /* atan only returns -90 to +90, so figure out how to use */\n  /* the atan() value */\n\n  if (x == 0) {      /* x is zero, we either move due north or south */\n    if (yy > cury)\n      d = 90;        /* north */\n    else\n      d = 270;       /* south */\n  } else {\n    if (yy < cury) {\n      if (xx > curx)\n        d = 360 + Math.atan_deg(y / x);  /* south-east, quadrant 4 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* south-west, quadrant 3 */\n    } else {\n      if (xx > curx)\n        d = Math.atan_deg(y / x);        /* north-east, quadrant 1 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* north-west, quadrant 2 */\n    }\n  }\n  return d;\n}\n</div>\n';
};


Pond.soy.playerPendulum = function(opt_data, opt_ignored) {
  return '\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (loc_x() > 15) {\n      drive(180, 25);\n    } else {\n      west = false;\n      drive(0, 0);\n    }\n  } else {\n    if (loc_x() < 75) {\n      drive(0, 25);\n    } else {\n      west = true;\n      drive(0, 0);\n    }\n  }\n}\n</div>\n';
};


Pond.soy.playerScared = function(opt_data, opt_ignored) {
  return '\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    drive(315, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    drive(0, 0);\n  }\n}\n</div>\n';
};