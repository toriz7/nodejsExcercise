const express=require('express');
const admin=require('./routes/admin') // admin 아래의 url 을 접속하기 위한 변수
const nunjucks=require('nunjucks');

const app=express();
const port=3000;


app.use('/admin',admin); //요건 미들웨어. 

nunjucks.configure('template',{
    autoescape: true, //html, javascript 오류 공격시 태그. 크로스사이트 공격 방어.
    express:app //express 변수인 app 선언
});

app.get('/',(req,res)=>{
    res.send("hello world! Express");
});

app.listen(port, () =>{
    console.log("Express Listening on port",port);
})

///what the?