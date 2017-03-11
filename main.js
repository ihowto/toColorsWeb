const express = require('express');
const bodyParser = require('body-parser');
const cookieParse = require("cookie-parser");

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParse());

app.use("/", express.static("./"));

var server = app.listen(80, function () {
    
    var host = server.address().address
    var port = server.address().port
    
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
