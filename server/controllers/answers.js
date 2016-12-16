var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

function AnswerController(){
    this.create = function(req, res) {
        var ans = {
            _user: req.session.user,
            _question: req.body.question,
            answer: req.body.answer,
            details: req.body.details
        };
        Answer.create(ans, function(err, answer){
            if (err) {
                res.json({
                    errors: {
                        answer_err: {
                            message: "Your answer needs to be more than 5 characters!",
                            kind: "invalid input",
                            path: "answer.js",
                            value: "cause of the initial error"
                        }
                    },
                    name: "Validation error"
                });
            } else {
                Question.findOne({_id: answer._question}, function(err, question){
                    if (err) {
                        res.json(err);
                    } else {
                        question.answers += 1;
                        question.save();
                        res.json(answer);
                    }
                });
            }
        });
    };

    this.index = function(req, res) {
        Answer.find({_question: req.params.id}).sort([['likes', 'descending']]).populate('_user _question').exec(function(err, answers){
            if (err) {
                res.json(err);
            } else {
                res.json(answers);
            }
        });
    };

    this.like = function(req, res) {
        Answer.findOne({_id: req.body._id}, function(err, answer){
            if (err) {
                res.json(err);
            } else {
                answer.likes += 1;
                answer.save();
                res.json(answer);
            }
        });
    };
}

module.exports = new AnswerController();
