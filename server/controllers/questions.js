var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionController(){
    this.create = function(req, res) {
        var quest = {
            _user: req.session.user,
            question: req.body.question,
            description: req.body.description
        };
        Question.create(quest, function(err, question){
            if (err) {
                res.json({
                    errors: {
                        ask_question: {
                            message: "Your question is not in the correct format! Is it more than 10 characters? ",
                            kind: "invalid input",
                            path: "question.js",
                            value: "cause of the initial error"
                        }
                    },
                    name: "Validation error"
                });
            } else {
                res.json(question);
            }
        });
    };

    this.index = function(req, res) {
        Question.find({}, function(err, questions){
            if (err) {
                res.json(err);
            } else {
                res.json(questions);
            }
        });
    };

    this.get = function(req, res) {
        Question.findOne({_id: req.params.id}, function(err, question){
            if (err) {
                res.json(err);
            } else {
                res.json(question);
            }
        });
    };
}

module.exports = new QuestionController();
