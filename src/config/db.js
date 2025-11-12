const mongoose = require("mongoose")


const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected succesfully");

    }catch(error){
        
        console.log("Something went wrong in database connection" ,error)
        process.exit(1);

    }

}

module.exports = connectDb;