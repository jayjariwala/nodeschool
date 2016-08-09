
var fs=require('fs');
var list=[];
module.exports = function(directoryName,extension,callback){
fs.readdir(directoryName,function(err,fileList){
  if(err)
  {
    return callback(err);
  }
  fileList.forEach(function(values){
      if(values.substring(values.indexOf('.'))== "."+extension)
      {
        list.push(values);
      }
      });
      callback(null,list);
});


};
