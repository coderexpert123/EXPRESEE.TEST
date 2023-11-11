const router=require('express').Router();
let products=require('../productData')
 
//Product Page
router.get('/products', (req,res) => {
    res.render('products',{

        tittle: 'Product Page'

    });
});


router.get('/api/products',(req,res)=>{


    res.json({products});

});


router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id);
    res.json({ status: 'OK' });
});


router.post('/api/products', (req,res)=>{
    const { names, price } = req.body;

    if (!names || !price) {
       // next(ErrorHandler.validationError('Name and price fields are required!'));
        // throw new Error('All fields are required!');
        // return res.status(422).json({ error: 'All fields are required.'});
   
        return res.status(422).json({error:"All Field are required"});

    }
    const product = {
        names,
        price,
        id: new Date().getTime().toString()
    }
    products.push(product);
    res.json(product);

});

module.exports=router;