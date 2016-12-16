app.factory('questionFactory', ['$http', function($http) {
    function QuestionFactory(){
        var _this = this;

        this.addQuestion = function(question, callback) {
            $http.post("/questions", question).then(function(returned_data){
                callback(returned_data.data);
            });
        };

        this.getQuestions = function(callback) {
            $http.get("/questions").then(function(returned_data){
                callback(returned_data.data);
            });
        };

        this.getCurQuestion = function(id, callback) {
            $http.get("/questions/" + id.id).then(function(returned_data){
                callback(returned_data.data);
            });
        };
    }
  return new QuestionFactory();
}]);
