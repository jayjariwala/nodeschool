function sum(arguments)
{
  var sum=0;
  for(var i=2;i<arguments.length;i++)
  {

    sum = sum + parseInt(arguments[i]);
  }

  return sum;
}
console.log(sum(process.argv));
