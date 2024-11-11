var age=[45,85,78,77,23,22,12,1,2,5,6,8,9,7,4,99,100,55,18,17];
//age.filter(callback);
age.filter(chk);
function chk(item)
{
    if(item>=18)
    {
    console.log(item);
    }
}
