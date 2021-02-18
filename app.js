var html = require('fs').readFileSync("index.html");
const httpServer = require("http").createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});
const io = require('socket.io')(httpServer);

io.on("shake",(times)=>{
  io.emit("shake",times);
});

httpServer.listen(3000, () => {
  console.log('go to http://0.0.0.0:3000');
});
