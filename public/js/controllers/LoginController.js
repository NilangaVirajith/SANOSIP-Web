var app = angular.module('SANOSIP', ['ui.router']);

app.controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state){

  $scope.SignIn = function(){
    $http.post('user/login', $scope.user).success(function(response){
      localStorage.setItem('User-Data', JSON.stringify(response));
      $scope.loggedIn = true;
    }).error(function(error){
      console.log(error);
    })
  };

}])
