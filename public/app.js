(function(){
    angular.module('SANOSIP', ['ui.router'])
        .config(function($stateProvider){
        $stateProvider
            .state('login',{
                url: '/',
                templateUrl: 'index.html',
                controller: 'UserController'
            })
            .state('signup', {
                url: '/user/signup',
                templateUrl: 'public/views/signup.html',
                controller: 'UserController'
            })
    })
}());