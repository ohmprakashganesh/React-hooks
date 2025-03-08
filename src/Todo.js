import { useMemo, useState } from "react";
const expensiveCalculation=(num)=>{
    for(var i=0; i<10000000; i++){
        num+=1

    }
    return num;

};
function Todo(){
    const[inputdata, setInputdata]=useState();
    const[count, setCount]=useState(0);
    const[todos, setTodos]=useState([]);//array of toto
     const calculation=useMemo(()=>expensiveCalculation(count),[count]);
     //memo is used to stre this calc inside cache
     //

     const increment=()=>{
        setCount((c)=>c+1);
     };
     
     const addTodo=()=>{
        setTodos((t)=>[...t, inputdata]);
     }
return(
    <div>
        <div>
            <h2>My Toda</h2>
            {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>;
            })}
            <input type="text" onChange={(e)=>setInputdata(e.target.value)}></input>
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr/>
        <div>
            count:{count}
            {inputdata}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculator</h2>
            {calculation}
        </div>
    </div>
)
}
export default Todo