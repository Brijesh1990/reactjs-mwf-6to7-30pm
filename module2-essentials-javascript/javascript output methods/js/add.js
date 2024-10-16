function display()
{
    // data type
    // type casting parseInt() | parseFloat()
    var a=parseFloat(document.getElementById("a").value); 
    var b=parseFloat(document.getElementById("b").value);
    var c=a+b;
    document.getElementById("result").innerHTML="The additions of numbers is :"+c;
}