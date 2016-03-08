angular.module('CoffeeCards', ["ngMaterial", 'ui.router', 'firebase'])
  .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){

      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('amber');

      $urlRouterProvider.otherwise('/coffeecards');

      $stateProvider


        .state('coffeecards',
        {
          url: '/coffeecards',
          templateUrl: 'components/classifieds/classifieds.tpl.html',
          controller: 'classifiedsCtrl as vm'
        })

        .state('coffeecards.new',
        {
          url: '/new',
          templateUrl: 'components/new/newClassifieds.tpl.html',
          controller: 'newClassifiedsCtrl as vm'
        })

        .state('coffeecards.edit', {
          url: '/:id/edit',
          templateUrl: 'components/edit/editClassifieds.tpl.html',
          controller: 'editClassifiedsCtrl as vm',
          params: {
            classified: null
          }
        })
})
