var filteredFiles=require('./filelister.js');

filteredFiles(process.argv[2],process.argv[3],abc);


function abc(err,list){
  if(err)
  {
    console.log("error");
  }
  list.forEach(function(values)
{
  console.log(values);
});
}
