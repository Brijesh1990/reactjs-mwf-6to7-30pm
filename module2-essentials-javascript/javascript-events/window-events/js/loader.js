var MyVar;
function mainFunction()
{
    MyVar=setTimeout("Display()",2500);
}
function Display()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("content").style="display:block";
}