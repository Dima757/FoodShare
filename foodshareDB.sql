DROP DATABASE IF EXISTS foodshare_db;

CREATE DATABASE foodshare_db;

USE foodshare_db;

CREATE TABLE users
(
    username VARCHAR(30) NOT NULL,
    
    passcode VARCHAR(30),

    user_id INTEGER(15),

    email VARCHAR(100) NOT NULL,

    user_type CHARACTER
    (20)
);

    Insert into users
        (username, zip_code, passcode, user_id,user_type)
    VALUES
        ("John", 75181, "password1", 1, "cook")

    Insert into users
        (username, zip_code, passcode, user_id,user_type)
    VALUES
        ("Billy", 75150, "password2", 2, "buyer")

    Insert into users
        (username, zip_code, passcode, user_id,user_type)
    VALUES
        ("Miguel", 75149, "password3", 3, "buyer")

    