var http=require('http');
var bl=require('bl');
var server=http.createServer(function(request,response){
  if(request.method!= 'POST')
  {
    return response.end("please give me POST")
  }
  var map=require('through2-map')
  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response)
})
server.listen(process.argv[2]);
