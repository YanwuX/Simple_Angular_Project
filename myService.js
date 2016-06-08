app.service('myService', function () {
    var users = [
	    {id:1, fName:'Hege', lName:"Pege", db:"service", tittle:"Software Developer 3", gender:"Male", age:35 },
	    {id:2, fName:'Kim',  lName:"Pim", db:"service", tittle:"Software Developer 3", gender:"Male", age:28 },
	    {id:3, fName:'Sal',  lName:"Smith", db:"service", tittle:"Software Developer 2", gender:"Male", age:37 },
	    {id:4, fName:'Jack', lName:"Jones", db:"service", tittle:"Software Developer 2", gender:"Male", age:46 },
	    {id:5, fName:'John', lName:"Doe", db:"service", tittle:"Staff Engineer", gender:"Male", age:23 },
	    {id:6, fName:'Peter',lName:"Pan", db:"service", tittle:"Business Analysis", gender:"Male", age:25 }
	];

	this.getUsers = function() {
		return users;
	};

	this.getUsersLength = function() {
    	return users.length;
  	}

  	// this.setUserID = function() {
   //  	name.id = $scope.idx;
   //  	$scope.idx++;
  	// }
	this.deleteUser = function(id) {
		for( var i in users){
			if( users[i].id == id) {
				users.splice(i, 1);
			}
		}

	    // $scope.users.splice(idx, 1);
	    // setUserID();
	};

	this.editUser = function($scope) {
		for( var i in users){
			if( users[i].id == $scope.id) {
			  	users[i].fName = $scope.fName;
			  	users[i].lName = $scope.lName;
			  	users[i].title = $scope.title;
				users[i].age = $scope.age;
				users[i].gender = $scope.gender;
			}
		}
	};

	this.addUser = function(user) {
		console.log(user);
		users.push(user);
		// $scope.users.push({id:getUsersLength() + 1, fName:$scope.fName,lName:$scope.lName, tittle:$scope.tittle, gender:$scope.gender, age:$scope.age });
	}	

	this.test = function($scope) {
    	if ($scope.passw1 !== $scope.passw2) {
    		$scope.error = true;
    	} 
    	else {
    		$scope.error = false;
    	}
    	if ($scope.fName.length && $scope.lName.length && $scope.passw1.length && $scope.passw2.length) {
			$scope.incomplete = false;
    	}
  };
});


app.filter("ordinal", function() {
  return function(input) {
    input += '';
    var regularExpression = /^[4-9]{1,1}$/
    if(input.charAt(input.length - 1 ) === "1") {input += 'st'; return input;}
    if(input.charAt(input.length - 1 ) === "2") {input += 'nd'; return input;}
    if(input.charAt(input.length - 1 ) === "3") {input += 'rd'; return input;}
    if(regularExpression.test(input.charAt(input.length - 1 ))) {input += 'th'; return input;}
    else return input;
  }
});