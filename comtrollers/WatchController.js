'use strict'
const axios = require('axios');
const watchModel =require('../model/Watch.Model');




let gitAlldataApicontroler=(req,res)=>{

    axios.get('https://watches-world.herokuapp.com/watches-list').then(data =>{
       
        res.json(data.data);
    } 

    ).catch(err=> res.json({message:err.message}));



}


let createWatchController=async(req,res)=>{
    let newWatch =  new watchModel(req.body);
   try{
       await newWatch.save();
       let watchList = await watchModel.find();
       res.status(200).json(watchList)

   }catch(err){
       res.status(400).json({message:err.message})
   }

}

let gitFAVWatchController=async(req,res)=>{
    const email = req.query.email;
    await watchModel.findOne({userEmail:email},(error,data)=>{
         if (data === null )
         { 
               res.send("not found");

         }else {
             res.status(200).json(data);
         }
    });


}

let deleteWatchController= async(req,res)=>{
   try{
    await watchModel.findByIdAndDelete(req.params.id);

       let watchList = await watchModel.find();
       res.status(200).json(watchList)

   }catch(err){
       res.status(400).json({message:err.message})
   }

}




let updateWatchController=async(req,res)=>{
    let updateWatch =  await watchModel.findByIdAndUpdate({_id:req.params.id},req.body);
   try{
       await  updateWatch.save();
       let watchList = await watchModel.find();
       res.status(200).json(watchList)

   }catch(err){
       res.status(400).json({message:err.message})
   }

}

module.exports={
    gitAlldataApicontroler,
    createWatchController,
    gitFAVWatchController,
    deleteWatchController,
    updateWatchController
}