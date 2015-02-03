// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Docs.soy');

goog.require('soy');
goog.require('soydata');


Pond.Docs.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<h1>Pond Documentation</h1><p>Table of Contents</p><ul><li><a href="#pond">Pond</a></li>' + ((opt_ijData.level >= 2) ? '<li><a href="#logic">Logic</a></li>' : '') + ((opt_ijData.level >= 2) ? '<li><a href="#loops">Loops</a></li>' : '') + '<li><a href="#math">Math</a></li>' + ((opt_ijData.level >= 7) ? '<li><a href="#variables">Variables</a></li>' : '') + ((opt_ijData.level >= 8) ? '<li><a href="#functions">Functions</a></li>' : '') + '</ul><hr><!-- ---------------------------------------------------------------------- --><h1 id="pond">Pond</h1><h2>Angles</h2><p>The compass is oriented so that due east (right) is 0 degrees, 90 is north, 180 is west, 270 is south. Angles wrap as expected: -90 is south, 450 is north.</p><p><img src="docs/compass.png" height="145" width="150" style="padding: 0 2em;"></p><h2>Cannon</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/cannon.png" height="41" width="231"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">cannon(<i>angle</i>, <i>range</i>)</pre>' : '') + '<p>The <code>cannon()</code> function fires a cannonball towards the specified angle and range.  The angle is independent of the direction of the duck. The range can be 0-70 metres, with greater ranges truncated to 70.</p><p>The cannon takes about one second to reload after firing. If <code>cannon()</code> is called during this time, nothing happens.' + ((opt_ijData.pond == 'advanced') ? ' <code>cannon()</code> returns <code>true</code> if a cannonball was fired, or <code>false</code> if the cannon is reloading.' : '') + '</p>' + ((opt_ijData.level >= 3) ? '<h2>Scan</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/scan.png" height="36" width="134"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">scan(<i>angle</i>, <i>width</i>)</pre>' : '') + '<p>The <code>scan()</code> function activates the duck\'s radar.  This function returns the range to the nearest opponent in the specified direction. The angle is independent of the direction of the duck.  Sunk opponents are not detected.  If there is no opponent in that direction, then <code>Infinity</code> is returned.</p>' + ((opt_ijData.pond == 'advanced') ? '<p>The second parameter of <code>scan()</code> specifies the width of the scanning beam.  This can be from 1 degree to 20 degrees.  Advanced players may wish to start scanning with a width of 20 for a fast scan, then progressively decrease the width to get more accuracy.</p>' : '') : '') + ((opt_ijData.level >= 4) ? '<h2>Swim</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/swim.png" height="41" width="131"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">swim(<i>angle</i>, <i>speed</i>)</pre>' : '') + '<p>The <code>swim()</code> function starts the duck moving.  The duck will continue moving in the specified direction indefinitely.</p>' + ((opt_ijData.pond == 'advanced') ? '<p>The second parameter of <code>swim()</code> specifies the speed. This can be from 0 (stopped) to 100 (fast).  Direction of movement may only be changed if the speed is 50 or less.</p>' : '') + '<p>Crashing into the edges of the pond will damage your duck.  Crashing into other ducks will damage both ducks.  The amount of damage is proportional to your speed.</p>' : '') + ((opt_ijData.level >= 5) ? '<h2>Stop</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/stop.png" height="31" width="63"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">stop()</pre>' : '') + '<p>The <code>stop()</code> function stops the duck from moving.  The duck will take a moment to slow down before stopping completely.' + ((opt_ijData.pond == 'advanced') ? 'This is the same as calling <code>swim()</code> with a speed of zero.' : '') + '</p>' : '') + ((opt_ijData.level >= 5) ? '<h2>Location</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/loc_x.png" height="26" width="74"> &nbsp; <img src="docs/loc_y.png" height="26" width="74"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">loc_x()    loc_y()</pre>' : '') + '<p>The <code>loc_x()</code> and <code>loc_y()</code> functions return the duck\'s horizontal and vertical positions.  Values are between 0 and 100, starting from the lower-left corner.</p><p><img src="docs/map.png" height="190" width="244" style="padding: 0 2em;"></p>' : '') + ((opt_ijData.level >= 8) ? '<h2>Speed</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/speed.png" height="26" width="79"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">speed()</pre>' : '') + '<p>The <code>speed()</code> function returns the duck\'s current speed. Values are between 0 (stopped) and 100 (fast).  This function may be used to detect collisions (which instantly stop the duck).</p>' : '') + ((opt_ijData.level >= 8) ? '<h2>Health</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/health.png" height="26" width="78"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="pondSpec spec">health()</pre>' : '') + '<p>The <code>health()</code> function returns the duck\'s current health level. Values are between 0 (sunk) and 100 (perfect).  Advanced players may wish to store the health in a variable, then periodically check to see if the health has decreased, thus indicating that the duck is under attack.</p><p>There is no way to repair health.</p>' : '') + ((opt_ijData.level >= 2) ? '<hr><!-- ---------------------------------------------------------------------- --><h1 id="logic">Logic</h1>' + ((opt_ijData.level >= 5) ? '<h2>If</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/if.png" height="90" width="118"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="logicSpec spec">if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else {\n  <i>statements</i>\n}</pre>' : '') + '<p>If the condition is true, then execute the contained statements. The <code>if</code> may be followed by any number of other <code>else if</code> conditions, and at the end by an optional <code>else</code> condition that executes if none of the previous conditions were true.</p>' : '') + ((opt_ijData.level >= 5) ? '<h2>Equality</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/equals.png" height="36" width="122"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="logicSpec spec">==    !=    &lt;    &lt;=    &gt;    &gt;=</pre>' : '') + '<p>These expressions compare two numbers and return <code>true</code> or <code>false</code>. The six available equality operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Equals</td><td><code>5 == 10</code></td><td><code>false</code></td></tr><tr><td>Not equals</td><td><code>5 != 10</code></td><td><code>true</code></td></tr><tr><td>Less than</td><td><code>5 &lt; 10</code></td><td><code>true</code></td></tr><tr><td>Less than or equal</td><td><code>5 &lt;= 10</code></td><td><code>true</code></td></tr><tr><td>Greater than</td><td><code>5 &gt; 10</code></td><td><code>false</code></td></tr><tr><td>Greater than or equal</td><td><code>5 &gt;= 10</code></td><td><code>false</code></td></tr></table><p>Use of <code>!=</code> may be dangerous if the numbers being compared are fractions.  Consider this code that is designed to swim to 50 then stop:</p><pre>while (loc_y() <b>!=</b> 50) {\n  swim(90' + ((opt_ijData.pond == 'advanced') ? ', 50' : '') + ');\n}\nstop();</pre><p>The above code will fail because <code>loc_y()</code> may be 49.4 on one execution, then 50.6 on the next execution.  Since the value was not seen at exactly 50, the loop continues forever.  Below is better code:</p><pre>while (loc_y() <b>&lt;</b> 50) {\n  swim(90' + ((opt_ijData.pond == 'advanced') ? ', 50' : '') + ');\n}\nstop();</pre>' : '') + ((opt_ijData.level >= 7) ? '<h2>And/Or</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/and.png" height="36" width="124"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="logicSpec spec">&&    ||</pre>' : '') + '<p>\'And\' is represented by the <code>&&</code> operator. It returns <code>true</code> only if both inputs are <code>true</code>. For example this code will only fire the cannon if the range is both greater than 5 and less than 70:</p><pre>if (range &gt; 5 <b>&amp;&amp;</b> range &lt; 70) {\n  cannon(angle, range);\n}</pre><p>\'Or\' is represented by the <code>||</code> operator. It returns <code>true</code> if either input is <code>true</code>. For example this code will stop if the duck is close to any wall:</p><pre>if (loc_x() &lt; 10 <b>||</b> loc_x() &gt; 90 <b>||</b>\n    loc_y() &lt; 10 <b>||</b> loc_y() &gt; 90) {\n  stop();\n}</pre>' : '') + '<h2>Booleans</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/true.png" height="26" width="68"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="logicSpec spec">true    false</pre>' : '') + '<p>The value <code>true</code> is mainly used by the while loop to make a loop that executes forever.  The value <code>false</code> is also available.</p>' : '') + ((opt_ijData.level >= 2) ? '<hr><!-- ---------------------------------------------------------------------- --><h1 id="loops">Loops</h1><h2>While</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/while.png" height="90" width="118"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="loopsSpec spec">while (<i>condition</i>) {\n  <i>statements</i>\n}</pre>' : '') + '<p>Loops will repeat executing the enclosed statements as long as the condition is true.  Thus, the following will fire the cannon west forever:</p><pre>while (true) {\n  cannon(180, 50);\n}</pre><p>Whereas the following will fire the canon west as long as an opponent is in range:</p><pre>while (scan(180' + ((opt_ijData.pond == 'advanced') ? ', 5' : '') + ') &lt;= 70) {\n  cannon(180, scan(180' + ((opt_ijData.pond == 'advanced') ? ', 5' : '') + '));\n}</pre>' : '') + '<hr><!-- ---------------------------------------------------------------------- --><h1 id="math">Math</h1><h2>Number</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/number.png" height="26" width="37"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="mathSpec spec">123</pre>' : '') + '<p>Numbers are used for many things, including ranges, angles, and counters. Numbers may be negative (e.g. -360), or fractional (e.g. 3.14159), or very large (e.g. 9007199254740992). There is even a special number called <code>Infinity</code>.</p><p>Do not use thousands separators (e.g. 9,000).</p>' + ((opt_ijData.level >= 7) ? '<h2>Arithmetic</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/plus.png" height="36" width="113"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="mathSpec spec">+    -    *    /</pre>' : '') + '<p>These operators take two numbers and return a single number. The four available arithmetic operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Plus</td><td><code>3 + 4</code></td><td><code>7</code></td></tr><tr><td>Minus</td><td><code>3 - 4</code></td><td><code>-1</code></td></tr><tr><td>Multiply</td><td><code>3 * 4</code></td><td><code>12</code></td></tr><tr><td>Divide</td><td><code>3 / 4</code></td><td><code>0.75</code></td></tr></table>' : '') + ((opt_ijData.level >= 7) ? '<h2>Trigonometry</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/math_sqrt.png" height="36" width="164"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="mathSpec spec">Math.<i>operation</i>(<i>number</i>)</pre>' : '') + '<p>These functions take a number and return a number. The eight available functions are:</p><table><tr><th>Function</td><th>Example</td><th>Returns</td></tr><tr><td>Square root</td><td><code>Math.sqrt(25)</code></td><td><code>5</code></td></tr><tr><td>Absolute</td><td><code>Math.abs(-25)</code></td><td><code>25</code></td></tr><tr><td>Sine</td><td><code>Math.sin_deg(30)</code></td><td><code>0.5</code></td></tr><tr><td>Cosine</td><td><code>Math.cos_deg(30)</code></td><td><code>0.866</code></td></tr><tr><td>Tangent</td><td><code>Math.tan_deg(30)</code></td><td><code>0.577</code></td></tr><tr><td>Arcsine</td><td><code>Math.asin_deg(0.5)</code></td><td><code>30</code></td></tr><tr><td>Arccosine</td><td><code>Math.acos_deg(0.866)</code></td><td><code>30.003</code></td></tr><tr><td>Arctangent</td><td><code>Math.atan_deg(0.577)</code></td><td><code>29.985</code></td></tr></table><p>Note that the trigonmetric functions all use degrees, not radians.</p>' : '') + ((opt_ijData.level >= 7) ? '<h2>Incrementing</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/increment.png" height="41" width="159"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="mathSpec spec"><i>name</i> += <i>number</i>;</pre>' : '') + '<p>This is a shortcut for adding a number to an existing variable. There is no difference between the following two lines:</p><pre>angle += 10;\nvar angle = angle + 10;</pre><p>Do not use <code>+=</code> on a variable that has not already been defined. If in doubt, assign the variable to 0 at the beginning of the program.</p>' : '') + ((opt_ijData.level >= 7) ? '<h2>Random</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/math_random.png" height="26" width="124"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="mathSpec spec">Math.random()</pre>' : '') + '<p>This function returns a random fraction from 0.0 to 1.0.  To get a random number in a larger range, just multiply it by the maximum value. Here\'s an example of getting a random angle:</p><pre>var angle = Math.random() * 360;</pre>' : '') + ((opt_ijData.level >= 7) ? '<hr><!-- ---------------------------------------------------------------------- --><h1 id="variables">Variables</h1><h2>Assigning</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/var_set.png" height="40" width="165"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="variablesSpec spec">var <i>name</i> = <i>value</i>;</pre>' : '') + '<p>Assigns a value (usually a number) to the named variable. The name of the variable should be something that makes sense, such as <code>range</code> or <code>angle</code>.</p>' + ((opt_ijData.pond == 'advanced') ? '<p>Note that variable names are case-sensitive, thus <code>angle</code> and <code>Angle</code> are two completely different variables.  Variable names must only use the English letters a-z, and numbers. Variable names may not start with a number.</p><p>The <code>var</code> keyword may be omitted on all but the first assignment, but there is no harm in using it.</p>' : '') + '<h2>Retrieving</h2>' + ((opt_ijData.pond == 'basic') ? '<p><img src="docs/var_get.png" height="26" width="79"></p>' : (opt_ijData.pond == 'advanced') ? '<pre class="variablesSpec spec"><i>name</i></pre>' : '') + '<p>Retrieves the value (usually a number) that had previously been assigned to the named variable.</p>' : '') + ((opt_ijData.level >= 8) ? '<hr><!-- ---------------------------------------------------------------------- --><h1 id="functions">Functions</h1><p>TODO</p>' : '');
};
