var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    
    var task1 = {
        taskname: "Do the Thing",
        done: false
    }
    console.log(task1);
    $scope.taskList = [];
    $scope.taskList.push(task1);

    $scope.addTask = function(){
        if ($scope.taskname){
            task1 = {taskname: $scope.taskname,done: false}
            $scope.taskList.push(task1);
        }
    }
    $scope.removeTask = function(task){
        var pos = $scope.taskList.indexOf(task);
        $scope.taskList.splice(pos,1);
    }
    
    $scope.toggleDone = function(task){
        var pos = $scope.taskList.indexOf(task);
        if ($scope.taskList[pos].done == true){
            $scope.taskList[pos].done = false;
        }
        else{
            $scope.taskList[pos].done = true;
        }
    }

    
});