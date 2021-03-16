const http=require("http");

http.createServer( (request,response) => {
    response.writeHead(200,{'Content-type':'text/plain'}); // 200 은 상태코드. http 상태코드를 따름.  ex>404 not found
    response.write("Hello Server");
    response.end();
}).listen(3000);