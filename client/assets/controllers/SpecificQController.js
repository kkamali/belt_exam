app.controller('specificQController', ["$scope", "userFactory", "$location", "questionFactory", "$routeParams", "answerFactory", function($scope, userFactory, $location, questionFactory, $routeParams, answerFactory){

    $scope.cur_user = null;
    $scope.answers = [];

    var getAnswers = function() {
        answerFactory.getAnswers($routeParams, function(returnedData){
            $scope.answers = returnedData;
        });
    };

    userFactory.getCurUser(function(returnedData){
        if (returnedData.status === false) {
            $location.url("/login");
        } else {
            $scope.cur_user = returnedData;
        }
    });

    questionFactory.getCurQuestion($routeParams, function(returnedData){
        $scope.question = returnedData;
        getAnswers();
    });

    $scope.like = function(index){
        $scope.liked = $scope.answers[index];
        answerFactory.like($scope.liked, function(returnedData){
            getAnswers();
        });
    };

}]);
