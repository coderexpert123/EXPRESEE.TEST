// This Page is used for creting server 
const express=require('express');
const app=express();
const path=require('path');
const PORT = process.env.PORT || 5000;
const mainRouter=require('./routes/index');
const productRouter=require('./routes/products');

app.use(express.static('public'))

app.set('view engine','ejs');
//console.log(app.get('view engine'));
console.log(app.get('views'));


app.use(mainRouter);
app.use(productRouter);

app.listen(PORT, () =>{
    console.log(`Running on Port ${PORT}`);
});

 

