var app = angular.module('SANOSIP');

app.controller('StudentController', function($scope, $http, $state){
    
   $scope.createStudent = function(){
        $http.post('student/createstudent', $scope.student).success(function(response){
            console.log(response);
        }).error(function(error){
            console.log(error);
        });
   }
   
    $scope.selectedClass;
    $scope.selectedGender;
    
    $scope.Genders = ['Male','Female'];
    $scope.Classes = ['Physics', 'Chemistry'];
    
    if(!$scope.selectedGender){
        $scope.selectedGender = "Select gender";
    }
    
    if(!$scope.selectedClass){
        $scope.selectedClass = "Select a Class";
    }
    
    $scope.classItemSelected = function(item){
        $scope.selectedClass = item;
        $scope.student.class = item;
    }
   
   $scope.dropboxitemselected = function (item) {
       $scope.selectedGender = item;
       $scope.student.gender = item;
    }
   
})