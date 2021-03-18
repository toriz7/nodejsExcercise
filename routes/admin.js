const express=require('express');

const router=express.Router();
// 여기서 로그인 인자는 3개를 받는다. req, res, next


function testMiddleware(req,res,next){
    console.log('first middle ware');
    next();
}

function testMiddleware2(req,res,next){
    console.log('second middle ware');
    next();
}
/*
router.get('/', testMiddleware,testMiddleware2,(req,res)=>{
    res.send("admin 이후 url");
})
*/
router.get('/', testMiddleware,testMiddleware2,(req,res)=>{
    res.send("admin 이후 url");
})
router.get('/products',(req,res)=>{
    //res.send("admin/products");
    res.render("admin/products.html",{
        message: 'products hello!',
        online : "hello products!"
    })
})

router.get('/products/write',(req,res)=>{
    res.render("admin/write.html");
})
module.exports=router;