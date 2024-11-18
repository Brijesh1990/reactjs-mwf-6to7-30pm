// create a function for clear the result values
function clr()
{
 document.getElementById("result").value="";
}
// create a member function for slice last element from result 
function slcValue()
{
 var num=document.getElementById("result").value;      
 var res=num.slice(0,-1);
 document.getElementById("result").value=res;
}
// create a function for get values in result from user input
function getValue(val)
{
    document.getElementById("result").value+=val;
}
// create a member function for evaluate a airthmatic concepts
function finalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
// create a function sqaure 
function sq()
{
    var num=document.getElementById("result").value;
    var res=Math.pow(num,2);
    document.getElementById("result").value=res;
}
// create a function sqaure 
function sqroot()
{
    var num=document.getElementById("result").value;
    var res=Math.sqrt(num);
    document.getElementById("result").value=res;
}