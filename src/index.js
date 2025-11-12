const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const urlRouter = require('./router/urlRouter')
const app = express();
dotenv.config();
app.use(express.json());

connectDb();
app.get('/',(req,res)=>{
    res.send("Server is working!")
    
})
app.use("/api/v1", urlRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{
    console.log(`Server is listening on ${PORT}`);
})