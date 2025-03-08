//to avoid expensive calculation 

import { type } from '@testing-library/user-event/dist/type';
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[number, setNumber]=useState(0);
    const[dark, setDark]=useState(false);

    const memoization=useMemo(()=>{
      return expensiveFunction(number)
      //call back function is expensivefunction and dependency funtion is number 
      //expensive fun will run when dependency is changed(number) so no need to calculate all time and save time 
    },[number])
    const cssStyle={
    backgroundColor:dark?"black":"white",
    color:dark? "white":"black",
    };

  return (
    <div style={cssStyle}>
      <input onChange={(e)=>setNumber(e.target.value) } type="number" value={number}/>
    <h1>calculation is {memoization}</h1>
    <button onClick={()=>setDark(!dark)}>toggle</button>
    </div>
  )
};

function expensiveFunction(number){
    console.log("loop started");
    for(let i=0; i<1000000000; i++){}
    return number;
}

export default UseMemo
