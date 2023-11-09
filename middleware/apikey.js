function apikey(req,res,next){

    const api_key='1234567';
    console.log(req.query.api_key);
    const userApiKey=req.query.api_key;

    if(userApiKey && (req.query.api_key===api_key))
    {
        next();
    }
    else
    {
        res.json({message:"Not Allowed ....Looking Fake"});

    }


}


module.exports=apikey
