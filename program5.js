var http=require('http');
var bl=require('bl');
var data;
http.get(process.argv[2],function(response){
    response.pipe(bl(function(err,data){
    var data=data.toString();
    var count=data.length;
    console.log(count);
    console.log(data);
  }));
  });
