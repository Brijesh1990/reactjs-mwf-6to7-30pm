/* switch : switch is used to check multiple conditions here we create case if condition is false default is executed

syntax : 

switch(condition)
{
case 'A':
statements;
break;
case 'B':
statements;
break;
case 'C':
statements;
break;
case 'D':
statements;
break;

default: 
statements;
break;

}


*/


var grade='D';
switch(grade)
{
case 'A':
console.log('You are Topper students');
break;

case 'B':
console.log('You are average students');
break;

case 'C':
console.log('You are failed students');
break;

default: 
console.log('Your grade is not found anymore try again or contact with admin');
break;


}