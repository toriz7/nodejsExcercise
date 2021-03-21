/*server 와 express 분리를 위함 */
const app=require('./app.js');
const port=3000;

app.listen(port,()=>{
    console.log('Express listen on port',3000);
})