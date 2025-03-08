//used to return memoize function 
//prevent function creation on re-render  
import React, { useEffect, useState, useCallback } from 'react'
import PrintTable from './PrintTable';

const UseCallBack = () => {
    const[number, setNumber]=useState(1);
    const[darkTheme, setDarktheme]=useState(false);

   const calculateTable= useCallback((value)=>{
    let newnum=number+value;
 return[newnum*1, newnum*2, newnum*3, newnum*4]

},[number])

    const cssStyle={
        backgroundColor:darkTheme?"black":"white",
        color:darkTheme? "white":"black",
        };

        // const calculateTable=()=> {
        //     return[number*1, number*2, number*3, number*4]};

  return (
    <div style={cssStyle}>
        <h1> this is for usecallback function </h1>
        <input onChange={(e)=>setNumber(e.target.valueAsNumber)}
        type='number' value={number}/>
        <PrintTable calculateTable ={calculateTable}/>
        <button onClick={()=>setDarktheme(!darkTheme)}>toggle</button>



      
    </div>
  );

}

export default UseCallBack;
