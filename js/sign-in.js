var userObj = [
    { username : "Sam",
      password : "password"
  
    },
    {
      username : "Oz",
      password : "12345"    
    },

    {
     username : "John",
     password : "Brown"   
    },

]

function checkInfo () {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (var i =0 ; i<userObj.length ; i++) {
         if (username == userObj[i].username && password == userObj[i].password){
             document.getElementById('result').innerHTML = (username + " is logged in!!!")
             return
         }
     
     } 
     document.getElementById('result').innerHTML=("Incorrect username or password!");
           
    }