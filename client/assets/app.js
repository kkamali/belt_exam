var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'userController'
    })
    .when('/dash', {
        templateUrl: 'partials/dash.html',
        controller: 'dashController'
    })
    .when('/ask', {
        templateUrl: 'partials/ask.html',
        controller: 'questionController'
    })
    .when('/question/:id', {
        templateUrl: 'partials/question.html',
        controller: 'specificQController'
    })
    .when('/question/:id/new_answer', {
        templateUrl: 'partials/answer.html',
        controller: 'answerController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
