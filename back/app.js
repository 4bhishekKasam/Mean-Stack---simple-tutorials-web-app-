const http        = require('http');
const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const cors        = require('cors');
const mongoose = require("mongoose");
const  route = require('./routes/route');
var app = express();

mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: true}));
app.use('',route);
//connect to mongodb
//mongoose.connect('mongodb://localhost:27017/db3');
mongoose.connect('mongodb://abhi_madmax:abhi190394@ds251518.mlab.com:51518/tutorialsdb');
//on connection
mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected at port 27017');
});
//on connection error
mongoose.connection.on('error',(err)=>{
    console.log(err);
});

const port = parseInt(process.env.PORT || 8080);

app.listen(port, function() {
    console.log("SERVER Listening on PORT =" + port);
  });













