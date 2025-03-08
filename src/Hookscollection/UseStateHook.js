import React, { useState } from 'react'

const UseStateHook = () => {
//     const [counter, setCounter]=useState(0);
   const [lname, setName]=useState("balma");
//passing object 
    const[details, setDetails]=useState({counter:0, name:"  "})
   function increase(){
    setDetails((prev)=> ({...prev, counter:prev.counter+1, name:lname}));
}
console.log(details)
  return (
    <div>
        <div>
            <h1>counter clock {details.counter}</h1>
            <button onClick={increase}>increase</button>
        </div>
         <div>
            <h1>your name  {details.name}</h1>
            <input type='text' onChange={(e)=> setName(e.target.value)}/>
        </div>

      
    </div>
  )
}

export default UseStateHook
