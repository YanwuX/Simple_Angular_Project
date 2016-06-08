app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/mainpage/', {
                templateUrl: 'users.html',
                controller: 'userCtrl'
            }).
            when('/edit/:id', {
                templateUrl: 'edit.html',
                controller: 'editCtrl'
            }).
            when('/create/', {
                templateUrl: 'create.html',
                controller: 'createCtrl'
            }).
            otherwise({
                redirectTo: '/mainpage/'
            });
    }]);

app.controller('userCtrl', ['$scope', '$http','myService', 'ordinalFilter', function($scope, $http, myService, ordinalFilter) {

  $scope.error = false;
  $scope.incomplete = false; 
  $scope.reverse = false;
  $scope.users = myService.getUsers();

  var temp;

  $scope.sortBy = function(ref) {
    $scope.sortReference = ref;
    $scope.reverse = ($scope.sortReference === temp) ? !$scope.reverse : false;
    temp = $scope.sortReference;
  };
  
  $scope.deleteUser= function(id){
      myService.deleteUser(id);
  }
}]);

app.controller('createCtrl', function($scope, myService) {
  $scope.error = false;
  $scope.incomplete = true;
  $scope.users = myService.getUsers();

  $scope.createUser = function(){
    myService.addUser({id:$scope.users[$scope.users.length - 1].id + 1, fName:$scope.fName, lName:$scope.lName, tittle:$scope.tittle, gender:$scope.gender, age:$scope.age });
  };

  $scope.$watch('passw1',function() {myService.test($scope);});
  $scope.$watch('passw2',function() {myService.test($scope);});
  $scope.$watch('fName', function() {myService.test($scope);});
  $scope.$watch('lName', function() {myService.test($scope);});

});

app.controller('editCtrl', function($scope, $routeParams, myService) {
  $scope.id = $routeParams.id;
  $scope.users = myService.getUsers();
  
  var currentUser;
  for( var i in $scope.users){
    if($scope.users[i].id == $scope.id) currentUser = $scope.users[i];
  }
  $scope.fName = currentUser.fName;
  $scope.lName = currentUser.lName;
  $scope.title = currentUser.title;
  $scope.age = currentUser.age;
  $scope.gender = currentUser.gender;

  $scope.error = false;
  $scope.incomplete = true; 
  

  $scope.$watch('passw1',function() {myService.test($scope);});
  $scope.$watch('passw2',function() {myService.test($scope);});
  $scope.$watch('fName', function() {myService.test($scope);});
  $scope.$watch('lName', function() {myService.test($scope);});

  $scope.editUser = function (){
    myService.editUser($scope);
  }
});

