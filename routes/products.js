const router=require('express').Router();
const products=require('../productData')
//Product Page
router.get('/products', (req,res) => {
    res.render('products',{

        tittle: 'Product Page'

    });
});


router.get('/api/products',(req,res)=>{


    res.json({products});

})
module.exports=router;