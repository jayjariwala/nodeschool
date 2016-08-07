var fs=require('fs');
var list=[];

function getFileList(callback)
{
  fs.readdir(process.argv[2],function fileList(err,filelist){
    list=filelist;
    callback();
  });
}
function displayFiles()
{
  var searchkeyword="."+process.argv[3];
  list.forEach( function(values){
  var dotindex=values.indexOf('.');
  var matchKey=values.substring(dotindex);
   if(searchkeyword == matchKey)
   {
     console.log(values);
   }
  });
}

getFileList(displayFiles);
