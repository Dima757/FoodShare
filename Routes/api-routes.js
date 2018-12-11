module.exports = function(app){
    // Get all users
    app.get('/getUsers', (req, res) => {
        console.log('hit endpoint')
        var data = connection.query('SELECT * FROM users', function (err, res) {
          if (err) throw err;
      
          for (i = 0; i < res.length; i++) {
              console.log('username' + res[i].username + ' email ' + res[i].email + 'passcode ' + res[i].passcode )
          }
          console.log(JSON.stringify(res), 'response')
      })
      console.log(data, 'data')
      res.send(JSON.stringify(data));
      });
}