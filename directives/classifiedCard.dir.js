angular.module('CoffeeCards')
  .directive('classifiedCard', function() {
    return {
        templateUrl: "directives/classifiedCard.tpl.html",
        scope: {
          coffeecards: "=",
          coffeecardsFilter: "=searchFilter",
          category: "=categoryFilter"
        },
        controller: classifiedCardCtr,
        controllerAs: 'vm'
      }

      function classifiedCardCtr($scope, $state, $mdDialog) {

        var vm = this;

        vm.editClassified = editClassified;
        vm.deleteClassified = deleteClassified;

        function editClassified(classified) {
          vm.editing = true;
          vm.sidebarTitle = 'Edit Classified';
          $state.go('coffeecards.edit', { id: classified.$id });
        }

        function deleteClassified(event, classified) {
          var confirm = $mdDialog.confirm()
              .title('Are you sure you want to delete ' + classified.title + '?')
              .targetEvent(event)
              .ok('Yes')
              .cancel('No');
          $mdDialog.show(confirm).then(function() {
            $scope.coffeecards.$remove(classified);
          }, function() {

          });
        }

        function showToast(message) {
          $mdToast.show(
            $mdToast.simple()
              .content(message)
              .position('top, right')
              .hideDelay(3000)
          );
        }

      }
    });
