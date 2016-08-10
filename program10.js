var http=require('http')
var server=http.createServer(function(request,response){
var url=require('url')
var urlobject=url.parse(request.url,true);
if(urlobject.pathname === '/api/parsetime')
{
var date=new Date(urlobject.query.iso);
response.writeHead(200, {'contant-type':'application/json'})
response.end(JSON.stringify({hour: date.getHours(),minute: date.getMinutes(), second: date.getSeconds() }));
}
if(urlobject.pathname === '/api/unixtime')
{
var date=new Date(urlobject.query.iso);
response.writeHead(200, {'conatant-type':'application/json'})
response.end(JSON.stringify({unixtime: date.getTime()}))
}
})
server.listen(process.argv[2])
