
import React,{useContext} from 'react';
import{loginContext} from "../App";
const Childforcontext = () => {
    const login=useContext(loginContext);
    console.log(login);
  return (
    <div>
      <h1>this is child class</h1>
    </div>
  )
}

export default Childforcontext;
