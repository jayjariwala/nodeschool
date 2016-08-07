var fs=require('fs');
var data;
var lines;
function getFileContents(callback)
{
  fs.readFile(process.argv[2], function (err,fileContents){
    data=fileContents.toString();
      callback();
  });
}
function countlines()
{
lines= data.split('\n').length-1;
console.log(lines);
}


getFileContents(countlines);
