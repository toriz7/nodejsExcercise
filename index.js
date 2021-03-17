const express=require('express');
const admin=require('./routes/admin') // admin 아래의 url 을 접속하기 위한 변수
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("hello world! Express");
});

app.use('/admin',admin); //요건 미들웨어
app.listen(port, () =>{
    console.log("Express Listening on port",port);
})

///what the?