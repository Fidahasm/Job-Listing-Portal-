const express = require('express')
const mongoose = require('mongoose')

exports.signup = async (req,res)=>{
    try{
        const {name,email,password} = req.body
        console.log("Req", req.body);
        return res.send("Api working...");
       
    }  catch(error){
        console.log(error);
    }
}
exports.getsignup = async (req,res)=>{
    try{
        
        return res.send("Api working...n gets");
       
    }  catch(error){
        console.log(error);
    }
}