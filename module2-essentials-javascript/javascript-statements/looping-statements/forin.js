/* forIn : forin loop is used to convert any key of object or property of object

    forin(key in object)
    {
    statements
    
    }

*/


const employee={id:1001,name:"brijesh",age:35};
let txt="";
for(let x in employee)
{
    txt +=employee[x] + " ";
    console.log(txt);
}