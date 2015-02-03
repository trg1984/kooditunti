/**
 * Blockly Games: Bootloader
 *
 * Copyright 2014 Google Inc.
 * https://github.com/google/blockly-games
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Load the correct language pack for the current application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

(function() {
  // Application path.
  var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);
  appName = appName ? appName[1].replace('-', '/') : 'index';
  window.appName = appName;

  // Supported languages (consistent across all apps).
  window['BlocklyGamesLanguages'] = [
      'ar', 'be-tarask', 'br', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es',
      'fa', 'fi', 'fr', 'gl', 'he', 'hrx', 'hu', 'ia', 'is', 'it', 'ja',
      'ko', 'lt', 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'pms', 'pt-br',
      'ro', 'ru', 'sc', 'sco', 'sk', 'sr', 'sv', 'th', 'tr', 'uk', 'vi',
      'zh-hans', 'zh-hant'
      ];

  // Use a series of heuristics that determine the likely language of this user.
  // First choice: The URL specified language.
  var param = window.location.search.match(/[?&]lang=([^&]+)/);
  var lang = param ? param[1].replace(/\+/g, '%20') : null;
  if (window['BlocklyGamesLanguages'].indexOf(lang) != -1) {
    // Save this explicit choice as cookie.
    document.cookie = 'lang=' + escape(lang) + '; path=/';
  } else {
    // Second choice: Language cookie.
    var cookie = document.cookie.match(/(^|;)\s*lang=(\w+)/);
    lang = cookie ? unescape(cookie[2]) : null;
    if (window['BlocklyGamesLanguages'].indexOf(lang) == -1) {
      // Third choice: The browser's language.
      lang = navigator.language;
      if (window['BlocklyGamesLanguages'].indexOf(lang) == -1) {
        // Fourth choice: Finnish.
        lang = 'fi';
      }
    }
  }
  window['BlocklyGamesLang'] = lang;

  // Load the chosen language pack.
  var script = document.createElement('script');
  script.src = appName + '/generated/' + lang + '/compressed.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();


// nles: added for evaluation iframe
var th = document.getElementsByTagName('head')[0];
var s = document.createElement('script');
s.setAttribute('type','text/javascript');
s.setAttribute('src','/vendor/jquery-2.1.1/jquery.min.js');
th.appendChild(s);

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

window.getEvaluationID = function(){
  var level = (typeof(getUrlParameter('level')) == "undefined") ? 1 : getUrlParameter('level')
  var eid =  window.appName + "-" + level;
  return eid;
}
setTimeout(function(){
  var iframeStyle = "width:100%;height:70px;border:none;"
  var es = "<iframe style='"+iframeStyle+"' src='/exercise-evaluation.html' id='exercise-evaluation'></iframe><br />"
  $("#dialogDoneText").after(es);
},2000)
//window.setInterval(function(){
  //var hasDoneDialog = (document.getElementById("dialogDone").className == "") ? true : false;
  //console.log(hasDoneDialog);
  //if(hasDoneDialog){
    //var es = "<iframe src='/exercise-evaluation.html#white' id='exercise-evaluation'></iframe>"
  //}
//},200);
