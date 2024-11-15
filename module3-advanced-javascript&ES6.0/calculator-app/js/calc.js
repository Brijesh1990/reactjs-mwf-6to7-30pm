// create a function for clear all values
function clr()
{
    document.getElementById("result").value="";
}
// create a function for input a values from button
function getValue(val)
{
    document.getElementById("result").value+=val;
}
//  create a function for slice any element from result 
function SliceValue()
{
    var slc=document.getElementById("result").value;
    var res=slc.slice(0,-1);
    document.getElementById("result").value=res;
}

// create a function for final Result
function finalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
// create a function for square or power
function sq()
{
    var num=document.getElementById("result").value;
    var res=Math.pow(num,2);
    document.getElementById("result").value=res;
}

// create a function for square root
function sqr()
{
    var num=document.getElementById("result").value;
    var res=Math.sqrt(num);
    document.getElementById("result").value=res;
}