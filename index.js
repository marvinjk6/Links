require('dotenv').config();
const express = require('express');
const app = express();
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

app.get('/', (req, res) => res.send('Hello World'));

app.use('/', linkRouter);

app.listen(process.env.PORT, ()=>console.log('Server Running'));