angular.module('CoffeeCards')
  .factory('classifiedsFactory', function($http, $firebaseArray) {

    var ref = new Firebase('https://coffeecards.firebaseio.com/');

      return {
        ref: $firebaseArray(ref)
      }
  });
