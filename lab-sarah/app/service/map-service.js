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
      desc: 'You arent a witch yet, keep going to discover your powers.',
      //don't have to explicitly say that north and west are null, because if you don't define them they are just falsy
      east: '2',
      south: '6',
    },
    '2': {
      desc: 'You can now move objects with your mind',
      east: '3',
      west: '1',
      south: '7',
    },
    '3': {
      desc: 'You just discovered you can light things on fire using your mind.',
      east: '4',
      west: '2',
    },
    '4': {
      desc: 'You can now bring the dead back to life. ',
      east: '5',
      west: '3',
    },
    '5': {
      desc: 'You lost your powers and are now just a mere mortal.',
    },
    '6': {
      desc: 'You just got killed, hopefully someone will bring you back to life. ',
      north: '1',
      east: '7',
    },
    '7': {
      desc: 'Womp womp, you just got burned at the stake with no hope for revival.',
      north: '2',
      west: '6',
    },
  };
  //return service
  return service;
}
