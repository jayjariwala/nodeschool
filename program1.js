var fs= require('fs');
var buffer=fs.readFileSync(process.argv[2]);
var data=buffer.toString();
console.log(data.split("\n").length-1);
