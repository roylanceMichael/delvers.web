// require_tree .

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.


//= require jquery
//= require jquery_ujs
//= require bootstrap.js
//= require knockout-3.0.0.js

/* this is the list of the order of files for dependencies! */

/* SERVICES/MODELS */
//= require engine/messages/currentTurn.js
//= require engine/services/targetRules/targetPlayers.js
//= require engine/services/targetRules/targetHumans.js
//= require engine/services/targetRules/targetMonsters.js

/* PLAYERS */
//= require engine/players/player.js
//= require engine/players/monster.js
//= require engine/players/humanPlayer.js
//= require engine/players/warrior.js

/* GAME */
//= require engine/game.js

/* UI */
//= require ui/imageAsset.js
//= require ui/characters.js
//= require ui/uiDrawing.js
//= require ui/uiUtilities.js
//= require ui/viewModels/mainViewModel.js
//= require ui/viewModels/combatViewModel.js