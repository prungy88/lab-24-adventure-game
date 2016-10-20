'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//a service is just something that can be used by any controller in the future, manages state
ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');
  //setup service
  let service = {};
  //add features to service
  service.mapData = {
    //create the rooms
    '1': {
      desc: 'You are in room 1. You dont have any powers yet.',
      //don't have to explicitly say that north and west are null, because if you don't define them they are just falsy
      east: '2',
      south: '6',
    },
    '2': {
      desc: 'You are in room 2. You can now move objects with your mind',
      east: '3',
      west: '1',
      south: '7',
    },
    '3': {
      desc: 'You are in room 3. You just discovered you can light things on fire using your mind.',
      east: '4',
      west: '2',
    },
    '4': {
      desc: 'You are in room 4. You can now bring the dead back to life. ',
      east: '5',
      west: '3',
    },
    '5': {
      desc: 'You are in room 5. You are now the next supreme witch. You Win!',
    },
    '6': {
      desc: 'You are in room 6. You just got killed, hopefully someone will bring you back to life. ',
      north: '1',
      east: '7',
    },
    '7': {
      desc: 'You are in room 7. You now have the power to control others minds.',
      north: '2',
      west: '6',
    },
  };
  //return service
  return service;
}
