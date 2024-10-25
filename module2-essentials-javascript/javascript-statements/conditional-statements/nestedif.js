/* 
nested if : nested if is used to load if within another if 
syntax : 

  if(condition)
  {
    if(condition)
    {
    statements;
    }
  }
  else 
  {
  statements;
  }
*/

var a=45;
var b=35;
if(a>b)
{
    if(a!=0 && b!=0)
    {
    console.log('a is greater than b and both are positive numbers');
    }
}

else 
{
    console.log('a is smaller than b');
}
