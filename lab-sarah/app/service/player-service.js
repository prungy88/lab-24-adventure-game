'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//in order to move the player around the map, need to inject the map service into the player service
//$q injects a promise library into angular
ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');
  //setup service
  let service = {};
  //add features to service

  let turn = 0;
//then you can just type player instead of service.player all the time
  let player = service.player = {
    name: 'the next supreme',
    location: '1',
    wp: 5,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to the game. Advance through the rooms to gain witch powers. Either become the next supreme witch or die trying',
      location: '1',
      wp: player.wp,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      //from their current location, can they move in the direction they want?
      let newLocation = mapService.mapData[currentLocation][direction];
      if (!newLocation) {
        //add in turn, because ng-repeat doesn't like it when there's identical things in an array. So just make each one unique with a unique turn number
        //use unshift instead of push so that most recent history is displayed at the top
        history.unshift({
          turn,
          desc: 'you just walked into a wall of fire',
          location: player.location,
          wp: player.wp,
        });
        console.log('history', history);
        return reject('no room in that direction');
      }
      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        wp: player.wp,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };


  //return service
  return service;
}
