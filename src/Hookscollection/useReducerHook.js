//used to manage state in react
//use it when we have alot of state

import React, { useReducer, useState } from 'react'
  const initialstate={count:0};
  const ACTION={
    INCREASE:"increase",
    DECREASE:"decrease"
  }
  const reducer=(state,action)=>{
    switch(action.type){
        case "INCREASE":
            return {count:state.count +1};
            case "DECREASE":
                return {count: state.count -1};
                default:
                    return state;
    }
  };
const useReducerHook = () => {
    //state is current state or value
    //dispatch is for updating the state or dispatching or calling 
    const [state, dispatch]=useReducer(reducer, initialstate);
   
 
    const decreasecount=()=>{
        dispatch({type:"DECREASE"});
    };
    const increasecount=()=>{
        dispatch({type: "INCREASE"});
    }


  
  return (
    <div>
        <h1>hello </h1>
        <button onClick={decreasecount}>Decrease</button>
      <h2>count:{state.count}</h2>
      <button onClick={increasecount}>Increase</button>
    </div>
  )
}

export default useReducerHook
