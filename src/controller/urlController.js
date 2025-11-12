const UrlModal = require('../modal/urlModal');
const {nanoid} = require('nanoid');

const createShortUrl = async(req,res)=>{
    try{
        const {originalUrl}=req.body;
        const urlRegex =/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(urlRegex.test(originalUrl))return res.status(400).json({message:"URL is not valid"});
        if(!originalUrl) return res.status(400).json({message:"URL is required"});
    
        const shortId = nanoid(6);
        const shortUrl = `${process.env.BASE_URL}/${shortId}`;
        const newUrl = await UrlModal.create({ shortId, shortUrl ,originalUrl});
        return res.status(201).json({newUrl});
    }catch(error){
        return res.status(500).json({message:error.message});
    }

}

const redirectUrl = async(req,res)=>{
    console.log("in redirectUrl")
    try{

        const {shortId}=req.params;
        const isShortIdExist = await UrlModal.findOne({shortId});
        if(!isShortIdExist)return res.status(404).json({message:"Invalid Request!"});
        isShortIdExist.click++;
        await isShortIdExist.save();
        res.redirect(isShortIdExist.originalUrl);
    }catch(error){
            console.log("Something went wrong!",error);
            res.status(500).json({message:error.message})
    }
}

module.exports = {createShortUrl,redirectUrl}