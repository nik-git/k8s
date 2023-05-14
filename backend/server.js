let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

const { Pool } = require("pg");
require("dotenv").config({path:".env"})
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;
const DB_PORT=process.env.DB_PORT ;
const DB_HOST=process.env.DB_HOST ;
const DB_NAME=process.env.DB_NAME;
const PORT=process.env.PORT ;

const pool = new Pool({
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log("Weclome to Home Page of Backend App");
  res.send("Weclome to Home Page of Backend App");
});
  
app.get('/users', function (req, res) {
    console.log("get all users");
    getUsers().then(results => {
      res.json(results);
    }).catch( err=> {
      res.send(err);
    });    
  });


app.listen(PORT, function () {
  console.log("backend-app listening on port " + PORT);
});


async function getUsers(){
  let results = await pool.query("select * from users");
  return results.rows;
}