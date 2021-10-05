'use strict'
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const {
    gitAlldataApicontroler,
    createWatchController,
    gitFAVWatchController,
    deleteWatchController,
    updateWatchController

}= require('./comtrollers/WatchController');

// Configure dotenv
require('dotenv').config();
const PORT = process.env.PORT;
const ATLAS_DATABASE_URL = process.env.ATLAS_DATABASE_URL;

// Middleware
app.use(cors());
app.use(express.json());




 // test end potin
 app.get('/', (req,res)=>{

         res.send("success");
 });


 app.get('/watchs',gitAlldataApicontroler)
 app.get('/watch-user',gitFAVWatchController)
 app.post('/create-watch',createWatchController)
 app.get('/delete-watch/:id',deleteWatchController)
 app.get('/update-watch/:id',updateWatchController)


mongoose.connect(`${ATLAS_DATABASE_URL}`, {useNewUrlParser: true}, { useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})