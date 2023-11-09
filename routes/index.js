const router=require('express').Router();

const apikeymiddleware=require('../middleware/apikey');
//router.use(apikeymiddleware);
//Home page 
router.get('/', (req,res) => {
    res.render('index',{
        tittle: 'Nishant Home Page'
    });
    //path.resolve(__dirname)+'/index.html'
});


//About Page
router.get('/about', (req,res) => {
    res.render('about',{

        tittle: 'About Page'

    });
});


//download file 
router.get('/download', (req,res) => {
    res.download(path.resolve(__dirname)+'/about.html');
});

// router.get('/api/product',apikeymiddleware,(req,res) => [

// res.json([

// {
//     id: "123",
//     name:"Football",
//     price:"200"

// },
// {
//     id: "321",
//     name:"Cricket ball",
//     price:"1200"

// }

// ])


// ]);




module.exports=router;
