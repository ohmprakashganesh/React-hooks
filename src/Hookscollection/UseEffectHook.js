//used to perform side effect like timeout timeinterval fetch data from api 
//useEffect(callback, dependencies )
//callback=what to run 
//dependencies =when to run 
//with out any dependencie /with empty array /with veribale 
import React, { useState,useEffect } from 'react'

const UseEffectHook = () => {
//with out dependencies .. value and tible both get change 
    // const [count, setCount]=useState(0);
    // useEffect(()=> {
    //     document.title=`${count} new message`;
    // });
 //it run only once while it render 
    // const [count, setCount]=useState(0);
    // useEffect(()=> {
    //     document.title=`${count} new message`;
    // },[]);
    const [count, setCount]=useState(0);
    const[otherCount, setOtherCount]=useState(5);

    useEffect(()=> {
        document.title=`${otherCount} new message`;
    },[otherCount]);
  
  
     
 
  return (
    <div> 
    <div>
    <h1>counter clock {count}</h1>
    <button onClick={()=> setCount(count+1)} >increase</button>
    <h1>other count {otherCount}</h1>
    <button onClick={()=> setOtherCount(otherCount+5)} >increase by 5</button>
    
</div>
    </div>
  )
}

export default UseEffectHook
