const {mongoose} = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortId:{type:String,require:true},
    originalUrl:{type:String,require:true},
    shortUrl:{type:String,require:true},
    click:{type:Number,default:0}
})

const UrlModal = mongoose.model("Url" , UrlSchema);
module.exports=UrlModal;
