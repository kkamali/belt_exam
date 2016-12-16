app.controller('dashController', ["$scope", "userFactory", "$location", "questionFactory", function($scope, userFactory, $location, questionFactory){

    $scope.cur_user = null;
    $scope.questions = [];

    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    questionFactory.getQuestions(function(returnedData){
        $scope.questions = returnedData; 
    });

}]);
