import React, { useEffect, useState } from 'react'
function Form1(){
 const [name,setName]=useState();
 const[age, setAge]=useState(13);
    function run(event){
        event.preventDefault();
    }
    function increase(event){
      event.preventDefault();
      setAge(age+1);
    }
    // console.log(name);
    //age is 13 when is refresh useeffect 100 is set
    useEffect(()=>{
      console.log("age", age)
    },[age]);

  return (
    <div className='form1'>
        <form>
            <div>{age}</div>
            <input type='text'placeholder='enter name'value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type='text'placeholder='enter name' ></input>
            <input type='text'placeholder='enter name' ></input>

         <button onClick={run}>Submit</button>
         <labe>{name}</labe>
        </form>
        <button onClick={increase}>increase</button>
    </div>
  )
}
export default Form1
