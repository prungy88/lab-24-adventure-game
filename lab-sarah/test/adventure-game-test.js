'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('testing ngAdventure', function(){
  describe('testing gameHistoryCtrl', function() {

    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject($controller => {
        this.gameHistoryCtrl = new $controller('GameHistoryController');
      });
    });

    it('history should be an array', () => {
      expect(Array.isArray(this.gameHistoryCtrl.history)).toBe(true);
      console.log(this.gameHistoryCtrl);
    });
  });

  describe('testing gamePadCtrl', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject($controller => {
        this.gamePadCtrl = new $controller('GamePadController');
      });
    });

    it('directions should be an array', () => {
      expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
    });
  });
});
