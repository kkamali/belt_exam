var mongoose = require('mongoose');
var User = mongoose.model('User');

function UserController(){
    this.login = function(req, res){
        User.findOne({name: req.body.name}, function(err, result) {
            if (!result) {
                User.create(req.body, function(err, user){
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else {
                        req.session.user = user;
                        req.session.save();
                        res.json(user);
                    }
                });
            } else {
                if (err) {
                    res.json(err);
                } else {
                    req.session.user = result;
                    req.session.save();
                    res.json(result);
                }
            }
        });
    };

    this.index = function(req, res) {
        if (!req.session.user || req.session.user === null) {
            res.json({status: false});
        } else {
            res.json(req.session.user);
        }
    };

    this.logout = function(req, res) {
        req.session.destroy();
        res.redirect("/");
    };
}

module.exports = new UserController();
