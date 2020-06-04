const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//app init
const app = express();
app.use(express.json());
app.use(cors());

//DB init
mongoose.connect('mongodb://localhost:27017/node-js-api', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
requireDir('./src/Models')

//Routes
app.use('/api', require('./src/routes'))

app.listen(8080)
