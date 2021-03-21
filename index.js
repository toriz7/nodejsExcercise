const express=require('express');
const admin=require('./routes/admin') // admin 아래의 url 을 접속하기 위한 변수
const nunjucks=require('nunjucks');
const logger = require('morgan');
const bodyParser=require('body-parser'); //express 의 내장 모듈이에 따로 설치가 필요 없다
const app=express();
const port=3000;

/* middleware setting */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* static file*/
app.use('/uploads',express.static('uploads')); //앞 uploads는 url, 뒤 uploads 는 파일명

/*template variable 선언 */
app.use((req,res,next)=>{ 
    app.locals.isLogin = true; //isLogin 이라는 변수 주기 위해 선언
    app.locals.req_path=req.path; //현재 url 을 보내주는 변수
    next();
})

app.use('/admin',admin); //요건 미들웨어.  admin 이하 url 사용되는  세팅이므로 위치가 미들웨어 전체 세팅보다 아래에 있어야 한다.

app.use((req,res, _ )=>{
    res.status(400).render('common/404.html');
});
app.use((req,res, _ )=>{
    res.status(500).render('common/500.html');
});

nunjucks.configure('template',{
    autoescape: true, //html, javascript 오류 공격시 태그. 크로스사이트 공격 방어.
    express:app //express 변수인 app 선언
});

function vipMiddleware(req,res,next){
    console.log('vip middle ware');
    next();
}

app.get('/',(req,res)=>{
    res.send("hello world! Express");
});



app.listen(port, () =>{
    console.log("Express Listening on port",port);
})

