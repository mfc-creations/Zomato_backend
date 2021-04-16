const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const port = 2020;
const host = 'localhost';

const routes = require('./Routes/index');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

mongoose.connect('mongodb+srv://dbsonishubham22:Soni@123@cluster0.e6vgl.mongodb.net/Project1DB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(res => {
    app.listen(port, host, () => {
        console.log(`Server Running at - ${host}:${port}`);
    })
}).catch(err => { console.log(err) })