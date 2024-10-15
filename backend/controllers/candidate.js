const express = require('express')
const mongoose = require('mongoose')

exports.signup = async (req,res)=>{
    try{
        const {name,email,password} = req.body
        console.log(req.body);
       
    }  catch(error){
        console.log(error);
    }
}