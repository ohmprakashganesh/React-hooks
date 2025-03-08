import logo from './logo.svg';
import './App.css';
import People from './Propsexample';
import UseReducerHook from './Hookscollection/useReducerHook';
 import Userlist from './userlist';
 import Form1 from './Form'
import Todo from './Todo';
import Bmimain from './bmi/bmimain';
import Maincomponent from './Hookscollection/Maincomponent';
import React,{createContext, useEffect, useRef, useState} from 'react';
import UseStateHook from './Hookscollection/UseStateHook';
import UseEffectHook from './Hookscollection/UseEffectHook';
import UseMemo from './Hookscollection/useMemo';
import UseCallBack from './Hookscollection/UseCallBack';
export const loginContext=createContext();
function App() {
  const [namee, setNamee]=useState();
const countt=useRef(0);
const inputEle=useRef();
const handleClick=()=>{
  //log ma click garne ani method herne k k xa vanerah
  console.log(inputEle);
  inputEle.current.style.width='600px';
  inputEle.current.focus();
}

  useEffect(()=> {
    countt.current=countt.current+1
  });
  var age=100;
  return (
    <div className="App">
      {age>50?(<People name={"raju"} age={"200"} salary={"500000"}  />):(<Userlist/>)}


     <Form1 />
     <Todo />
     <h1> this is for next page </h1>
      <Bmimain/>
      <UseStateHook />
      <UseEffectHook />
      <loginContext.Provider value={"ranjit"}>
      <Maincomponent />
      </loginContext.Provider>
     
      {/* <UseRefexm /> */}
      {/* <Reduxmainpage /> */}

      <div>
        <input type='text' ref={inputEle} onChange={(e)=>setNamee(e.target.value)}/>
       <h2>{namee}</h2>
       <h3>{countt.current}</h3> </div>
       <button onClick={handleClick}>cick</button>
    <h1> below is reducer hook </h1>
       <UseReducerHook />
       <h1> below is memo hook </h1>
       <UseMemo />
       <UseCallBack />
       

     
    </div>
  );
}


export default App;
