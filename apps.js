var app = angular.module("CalApp",[]);
app.controller("calculateCtrl", calculateCtrl);

function calculateCtrl($scope){
 	var op = 0;
	$scope.add = function(){
		console.log("Add");
		op = 1;
		$scope.operator = " + ";
	}
	$scope.sub = function(){
		console.log("Subtract");
		op = 2;
		$scope.operator = " - ";
	}
	$scope.mul = function(){
		console.log("Multiply");
		op=3;
		$scope.operator = " * ";
	}
	$scope.div = function(){
		console.log("Divide");
		op=4;
		$scope.operator = " / ";
	}
	$scope.calculate = function(){
		if(op == 1){
			$scope.result = $scope.num1 + $scope.num2;
		}
		else if(op == 2){
			$scope.result = $scope.num1 - $scope.num2;
		}
		else if(op == 3){
			$scope.result = $scope.num1 * $scope.num2;
		}
		else if(op == 4){
			$scope.result = $scope.num1 / $scope.num2;
		}
	}
	
}