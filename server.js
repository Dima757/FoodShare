var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require("mysql");
// var inquirer = require("inquirer");

var app = express();
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

app.post('/submit', (err, res) => {
	console.log(req.body)
});

app.get('/getUsers', (err, res) => {
  console.log('hit endpoint')
  var data = connection.query('SELECT * FROM users', function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
        console.log('username' + res[i].username + ' zip_code ' + res[i].zip_code + 'passcode ' + res[i].passcode + 'user_id ' + res[i].user_id + 'user_type ' + res[i].type )
    }
    console.log(JSON.stringify(res), 'response')
})
console.log(data, 'data')
res.send(JSON.stringify(data));
});

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});