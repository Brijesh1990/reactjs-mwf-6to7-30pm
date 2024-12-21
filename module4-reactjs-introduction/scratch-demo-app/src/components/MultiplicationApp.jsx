import React from "react";
const a=10;
const b=20;
const c=a+b;
const d=a*b;
function Multiplication()
{
    return(
        // <>
        // {/* fragements : fragements are used to return a multiple html elements inside of react */}

         
        //  <h1 align='center'>Additions of numbers is :{c}</h1>
        //  <h2 align='center'>Multiplication of numbers is :{d}</h2>

        // </>


        // <React.Fragment>
        // {/* fragements : fragements are used to return a multiple html elements inside of react */}

         
        //  <h1 align='center'>Additions of numbers is :{c}</h1>
        //  <h2 align='center'>Multiplication of numbers is :{d}</h2>

        // </React.Fragment>


        <div>
        {/* fragements : fragements are used to return a multiple html elements inside of react */}

         
         <h1 align='center'>Additions of numbers is :{c}</h1>
         <h2 align='center'>Multiplication of numbers is :{d}</h2>

        </div>
    ) 
}
export default Multiplication