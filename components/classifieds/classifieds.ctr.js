angular.module('CoffeeCards')
  .controller('classifiedsCtrl', function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

    var vm = this;

      vm.openSidebar = openSidebar;
      vm.showFilters = false;

      vm.coffeecards = classifiedsFactory.ref;
      vm.coffeecards.$loaded().then(function(coffeecards) {
        vm.categories = getCategories(coffeecards);
      });

      $scope.$on('newClassified', function(event, data) {
        vm.coffeecards.$add(data);
        showToast('Classified Saved');
      });

      $scope.$on('editSaved', function(event, message) {
        showToast(message);
      });

      vm.sidebarTitle;

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      function openSidebar() {
        vm.sidebarTitle = 'Add a Classified';
        $state.go('coffeecards.new');
      }

      function getCategories(coffeecards) {

        var categories = [];

        angular.forEach(coffeecards, function(ad) {
          angular.forEach(ad.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }



});
