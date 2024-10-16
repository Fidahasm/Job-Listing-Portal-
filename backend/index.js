const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const allRoute = require('./routes/all')
const axios = require('axios')
const apiRoute = require("./routes/all")

dotenv.config()

const app = express()  
app.use(cors())
app.use(express.json())



app.post('/signup',async(req,res)=>{
    console.log(req.body);
    
})
apiRoute(app);

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
