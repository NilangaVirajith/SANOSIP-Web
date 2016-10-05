(function(){
    angular.module('SANOSIP', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/');
          
        $stateProvider
        .state('login',{
            url: '/',
            templateUrl: 'index.html',
            controller: 'LoginController'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'signup.html',
          controller: 'LoginController'
        })
    })
}());
