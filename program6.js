var http=require('http');
var bl=require('bl');
var url=process.argv.slice(2);
var data;
var count=0;
var AllData=[];
url.forEach(function(value){
  http.get(value,function(response){
    response.pipe(bl(function(err,chunk){
      data=chunk.toString();
    }))
    response.on('end',function(e){
      AllData.push(data);
      count++;
      if(count===url.length)
      {
        AllData.forEach(function(values){
          console.log(values);
        })
      }
    })
  })

});
