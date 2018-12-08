$(document).ready(function() {
    
    $('#registration-page').on('submit', function() {
        event.preventDefault();

        var userName = $('#userName').val();
        var password = $('#passcode').val();
        var email = $('#email').val();

        var userObject = {
            userName: userName,
            password: password,
            email: email
        };

        $.post("/registerUser", userObject, function(data) {    
            console.log(data);
            window.location.href = "/registration-success";
        });

    });
});