'use strict';

//import the sass file
//mostly every component should have it's own sass file, and you need to import that in first
require('./_player-info.scss');

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('playerInfo', { //sets tagname to <player-info> in html
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl',
});

ngAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService){
  //creating reference from current controller to the service. So if the service changes, everything on our controller changes as well
  this.player = playerService.player;
}
