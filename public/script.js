var app = angular.module('myApp', []);

app.controller("HomeCtrl", ['$scope','$http', function($scope,$http){
    

   $scope.getvalue=function(){
     
     $http.get('mongodb://localhost:27017/Vipin').
		  success(function(data, status, headers, config) {
		   console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });	  
	}	  
		  
		  
}]);//end HomeCtrl

