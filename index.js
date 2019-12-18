const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes/api');

mongoose.connect('mongodb://localhost:27017/newsletterDB', {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);

app.listen(3000, ()=>{
    console.log("Server running on port 3000....");
});