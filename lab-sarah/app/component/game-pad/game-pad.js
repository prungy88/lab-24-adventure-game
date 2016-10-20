'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//first argument is the name of the component
ngAdventure.component('gamePad', { //sets tagname to <game-pad> in html
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  //can include this line instead of putting an ng-controller right in the html
  controllerAs: 'gamePadCtrl',
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('init gamePadCtrl');

//check that this.directions is an array
  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
      .then( location => {
        $log.log(`player at new location: ${location}`);
      })
      .catch(err => {
        $log.error(err);
      });
  };
}
