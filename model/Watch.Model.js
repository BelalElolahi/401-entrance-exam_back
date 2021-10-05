const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
   userEmail:String,
    tilte:String,
   description:String,
   toUSD:Number,
   image_url:String,
   username:String
   
});

let watchModel = mongoose.model('User', watchSchema);

module.exports = watchModel;