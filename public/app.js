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
        .state('adminmainboard',{
            url: '/adminmainboard',
            templateUrl: 'public/views/admin-mainboard.html',
            controller: 'DashboardController'
            })
        .state('admitstudent',{
            url: '/admitstudent',
            templateUrl: 'public/views/admit-student.html',
            controller: 'StudentController'
        })
    })
}());