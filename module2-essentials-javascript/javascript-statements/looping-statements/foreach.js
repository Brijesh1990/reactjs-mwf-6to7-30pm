/* foreach : foreach loop is used to convert array as values or provides array as its list  

    syntax : 
      array.foreach(callback function);


*/


const employee=["brijesh","rajesh","kirtan","kartik","paras"];
employee.forEach(display);
// call back function is used to call back in foreach

function display(item)
{
  console.log(item);
}