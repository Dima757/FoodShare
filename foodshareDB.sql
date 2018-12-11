DROP DATABASE IF EXISTS foodshare_db;

CREATE DATABASE foodshare_db;

USE foodshare_db;

CREATE TABLE users
(
    username VARCHAR(30) NOT NULL,
    
    passcode VARCHAR(30),

    email VARCHAR(100) NOT NULL,

);

    Insert into users
        (username, email, passcode)
    VALUES
        ("John", TheDude@gmail.com, "password1")

    Insert into users
        (username, email, passcode)
    VALUES
        ("Billy", TheOtherGuy@gmail.com, "password2")

    Insert into users
        (username, email, passcode)
    VALUES
        ("Miguel", HungryMan2000@gmail.com, "password3")

    