var express = require("express");
var app = express();
var path = require("path");
var bp = require("body-parser");
var session = require("express-session");

app.use(bp.json());
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/bower_components")));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening");
});
