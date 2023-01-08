require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const linkRouter = require('./routes/linkRouter');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_URL , (error)=>{
    if(error) {
        console.log(error);
    } else {
        console.log('Mongo Connected');
    }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRouter);

app.listen(process.env.PORT, ()=>console.log('Server Running'));