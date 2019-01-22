var express = require('express');
var app = express();
const cors=require('cors');
var sql = require("mssql");
const connection=require('./config/connection');
// var Login_apis=require('./routes/api/Login_apis');
var Login_apis=require('./routes/api/Login_apis');
var SetupUser_apis=require('./routes/api/Setup_user_apis');
const bodyParser = require('body-parser');
sql.connect(connection, function (err) {
    if (err) console.log(err);
    else console.log("connection success")
})
module.exports.request = new sql.Request();
app.use(bodyParser.json());
app.use('/api/Login_apis/' , Login_apis);
app.use('/api/SetupUser_apis/' , SetupUser_apis);
app.use(cors());
var server = app.listen(5000, function () {
    console.log('Server is running..');
});

