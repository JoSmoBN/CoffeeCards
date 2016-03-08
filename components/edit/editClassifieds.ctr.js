angular.module('CoffeeCards')
  .controller('editClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

    var vm = this;
        vm.coffeecards = classifiedsFactory.ref;
        vm.closeSidebar = closeSidebar;
        vm.saveEdit = saveEdit;
        vm.classified = vm.coffeecards.$getRecord($state.params.id);

      $timeout(function() {
        $mdSidenav('left').open();
      });

      $scope.$watch('sidenavOpen', function(sidenavOpen) {
        if(sidenavOpen === false) {
          $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('coffeecards');
          });
        }
      });


      function closeSidebar() {
        vm.classified = {};
        $mdSidenav('left')
          .close()
          .then(function() {
            $state.go('coffeecards');
        });
      }

      function saveEdit() {
        vm.coffeecards.$save(vm.classified).then(function() {
          $scope.$emit('editSaved', 'Edit Saved!');
          $scope.sidenavOpen = false;
        })
      }
});
