#Preparing the database

````sql
create database shopdb;
create user shopper@'localhost' identified by 'shoppass';
use shopdb;
grant all privileges on shopdb.* to shopper@'localhost';
exit;



**********
We will create frontend and backend separately from each other
we will submit data from the frontend using JQuery using $.get and $.post request which are basically AJAX req
and we will simply submit data in the form of JSON from the frontend to the backend
and the backend will also respond to data in the form of JSON to the frontend
we will nit be using HBS in this app
front end and backend will be completely separate
we can even run front end and backend on different computers
mostly now a days this approach is used
they work via and API there are certain URLs on which if you send a request you get certain data
but html files are not created by the backend


-----------------------
in package.json file: under script do "start": "node server.js" as we gonna do it again and again

-> npm insatll sequelize
-> npm install mysql2