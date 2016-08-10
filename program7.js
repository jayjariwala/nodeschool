var net=require('net')
var server=net.createServer(function(socket){
var d=new Date()
var YYYY=d.getFullYear()
var MM=parseInt(d.getMonth())+1;
var DD=d.getDate()
var hh=d.getHours()
var mm=d.getMinutes()
if(MM.toString().length != 2 )
{
  MM ='0'+MM
}
if(DD.toString().length != 2)
{
  DD ='0'+DD
}
if(hh.toString().length != 2)
{
  hh ='0'+hh
}
if(mm.toString().length != 2)
{
  mm ='0'+mm
}
socket.end(YYYY+'-'+MM+'-'+DD+" "+hh+":"+mm+"\n");
})
server.listen(process.argv[2]);
