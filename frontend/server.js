let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();
const axios = require('axios');
require("dotenv").config({path:".env"})
const BACKEND_URL=process.env.BACKEND_URL;
const PORT=process.env.PORT;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("Home page requested");
    let url = BACKEND_URL + "/users";
    axios.get(url).then(result => {
      res.json(result.data);
    });    
  });

app.listen(PORT, function () {
  console.log("frontend-app listening on port " + PORT);
});
