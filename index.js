const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("hello world! Express");
});
app.listen(port, () =>{
    console.log("Express Listening on port",port);
})

///what the?