var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require("mysql");
// var inquirer = require("inquirer");

var app = express();
app.use(express.static("public"));
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Dima7735",
  database: "foodshare_db"
});



// app.use('/static', express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.post('/submit', (req, res) => {
  console.log(req.body.firstName);
  var user = req.body;
  res.send("hi there " + user.firstName)
});

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});