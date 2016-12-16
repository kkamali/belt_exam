app.factory('answerFactory', ['$http', function($http) {
    function AnswerFactory(){
        var _this = this;

        this.answerQuestion = function(answer, callback) {
            $http.post("/answers", answer).then(function(returned_data){
                callback(returned_data.data);
            });
        };

        this.getAnswers = function(id, callback) {
            $http.get("/answers/" + id.id).then(function(returned_data) {
                callback(returned_data.data);
            });
        };

        this.like = function(liked, callback) {
            $http.post("/answers/like", liked).then(function(returned_data){
                callback(returned_data.data);
            });
        };
    }
  return new AnswerFactory();
}]);
