var app = angular.module('SANOSIP');

app.controller('UserController', function($scope, $http, $state){
    
    $scope.userTypes = ['Student', 'Tutor', 'Non-academic Staff'];
    
    if(localStorage['User-Data']){
        $scope.loggedIn = true;
    }else{
        $scope.loggedIn = false;
    }

    $scope.loginUser = function(){
        console.log("loginUser func");
        $http.post('user/login', $scope.login).success(function(response){
            localStorage.setItem('User-Data', JSON.stringify(response));
            $scope.loggedIn = true;
            $state.go('mainboard');
        }).error(function(error){
            console.log(error);
        });
    }
    
    $scope.signUp = function(){
        $http.post('user/signup', $scope.newUser).success(function(response){
            $scope.newUser = {};
            $scope.selectedItem = "User Type";
        }).error(function(error){
            console.log(error);
        });
    }
    
    $scope.selectedItem;
    
    if(!$scope.selectedItem){
        $scope.selectedItem = "User Type";
    }
    
    $scope.dropboxitemselected = function (item) {
        $scope.selectedItem = item;
        $scope.newUser.usertype = item;
    }
    
})