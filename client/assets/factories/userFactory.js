app.factory('userFactory', ['$http', function($http) {
    function UserFactory(){
        var _this = this;

        this.login = function(user, callback) {
            $http.post("/login", user).then(function(returned_data){
                callback(returned_data.data);
            });
        };

        this.getCurUser = function(callback){
            $http.get('/index').then(function(returned_data) {
                callback(returned_data.data);
            });
        };
    }

  return new UserFactory();
}]);
