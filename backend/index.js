const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const allRoute = require('./routes/all')
const axios = require('axios')


dotenv.config()

const app = express()  
app.use(cors())
app.use(express.json())



app.post('/signup',async(req,res)=>{
const {name,email,password} = req.body
    try{
        const response = await axios.post('http://localhost:5000/web/api/candidate/signup', {
            name,
            email,
            password,
        });
        // console.log(response);
        
    }
    catch(error){
        console.log(error)
    }
})

mongoose.connect(process.env.MONGO_URI)

.then(()=>{console.log('Connected to MongoDB')
    // console.log(process.env.MONGO_URI);

}
)

.catch(err=>{
    console.log('Failed to connect to MongoDB',err);
})


const PORT = process.env.PORT ||5000
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`));
