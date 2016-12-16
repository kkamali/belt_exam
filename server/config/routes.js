var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app) {
    app.post("/login", users.login);
    app.get("/index", users.index);
    app.get("/logout", users.logout);
    app.post("/questions", questions.create);
    app.get("/questions", questions.index);
    app.get("/questions/:id", questions.get);
    app.post("/answers", answers.create);
    app.get("/answers/:id", answers.index);
    app.post("/answers/like", answers.like); 
};
