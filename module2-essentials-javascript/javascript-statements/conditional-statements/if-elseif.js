/* 
if else if : if is executed when conditions is true else if is executed multiple times to check true conditions if elseif is false else is executed.

  syntax : 
   if()
   {
    statements;

   }
  elseif(conditions) 
  {
    statements;
  }
    elseif(conditions) 
  {
    statements;
  }

  else 
  {
  statements;
  }

*/

var a=20;
var b=20;
if(a>b)
{
    console.log('a is greater than b');
}
else if(b>a)
{
    console.log('b is greater than a');
}
else 
{
    console.log('a and b both are equal numbers')
}