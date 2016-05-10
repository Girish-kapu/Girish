var app = angular.module("app",[]);

app.controller("cont", function($scope) {
	var employees = [
	{ Name: "Girish", Age: 25},
	{ Name: "Chaitanya", Age: 26},
	{ Name: "Kishore", Age: 27},
	{ Name: 'Lss', Age: 28}
	];

	debugger;
	var cities = ["Visakhapatnam","Hyderabad","Bangalore","Mumbai"];

    $scope.employees = employees;

    $scope.cities = cities;
    $scope.HideEdit = true;
	$scope.selectedValues={
		name:"",age:"",city:""
	};

	/*$scope.name = "";
	$scope.age = "";
	$scope.city = "";
	*/
	$scope.submit = function() {
		$scope.employees.push({Name:$scope.selectedValues.name,Age:$scope.selectedValues.age,City:$scope.selectedValues.city});
	}

	var storedScope ={};
	$scope.Edit = function(Item) {
		storedScope = Item;
		$scope.HideEdit = false;
		$scope.selectedValues.name = Item.Name;
		$scope.selectedValues.age = Item.Age;
		$scope.selectedValues.city = Item.City;
	}
	$scope.update = function() {
		for (var i = 0; i < $scope.employees.length; i++) {
			if($scope.employees[i] === storedScope){
				$scope.employees[i].Name = $scope.selectedValues.name;
				$scope.employees[i].Age = $scope.selectedValues.age
				$scope.employees[i].City = $scope.selectedValues.city
			}
		}
		$scope.HideEdit = true;
		$scope.selectedValues={
			name:"",age:"",city:""
		};
	}
	$scope.cancel = function() {
		$scope.HideEdit = true;
		$scope.selectedValues={
			name:"",age:"",city:""
		};	
	}

})