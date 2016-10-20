'use strict';

// webpack assets
require('./scss/main.scss');
// npm modules
// require in angular
const angular = require('angular');
// require in angular modules
// create our angular module
angular.module('ngAdventure', []);

// require services
require('./service/map-service.js');
require('./service/player-service.js');
//require components (components will ahve controllers that depend on the above services
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
