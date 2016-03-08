angular.module('CoffeeCards')
  .controller('newClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

    var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveClassified = saveClassified;

      vm.sidebarTitle = 'Add a Coffee Card';

      // We need a watcher to trigger the sidenav
      // opening and closing
      $scope.$watch('sidenavOpen', function(sidenavOpen) {
        if(sidenavOpen === false) {
          $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('coffeecards');
          });
        }
      });

      $timeout(function() {
        $mdSidenav('left').open();
      });

      // Case 2 - simply use the watcher to move state
      function closeSidebar() {
        vm.classified = {};
        $scope.sidenavOpen = false;
      }

      function saveClassified(classified) {
        if(classified) {

          $scope.$emit('newClassified', classified)
          $scope.sidenavOpen = false;
        }
      }

  })
