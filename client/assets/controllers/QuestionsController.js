app.controller('questionController', ["$scope", "userFactory", "$location", "questionFactory", function($scope, userFactory, $location, questionFactory){

    $scope.cur_user = null;

    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    $scope.cancel = function() {
        $scope.question = {};
    };

    $scope.addQuestion = function() {
        if (!$scope.question) {
            alert("Question cannot be blank!");
        } else {
            questionFactory.addQuestion($scope.question, function(returnedData){
                if (returnedData.errors) {
                    $scope.errors = returnedData.errors; 
                } else {
                    $location.url("/dash");
                }
            });
        }
    };

}]);
