import { useState } from "react"

 
 function Bmimain(){
    const [weight, setWeight]=useState();
    const[height,setHeight]=useState();
    const[bmi, setBmi]=useState();
    const[message, setMessage]=useState('');
    // const[reload, setReload]=useState('');
    let reload=()=>{
       window.location.reload();

    }
     let calcbmi=(e)=>{
        setMessage('');
        e.preventDefault();
     
        if(weight =='' || height==''){
            alert("please enter valid data");
        }else if(weight==NaN || height==NaN){
            alert("please insert number")
        }else{
            let bmi=(weight/(height*height)*703)
            setBmi(bmi.toFixed(1));
            if(bmi<25){
                setMessage('you are underweight');
            }else if(bmi>25 && bmi<30){
                setMessage("you got balanced weight ");

                
            }else{
                setMessage("you are over weight");
            }
        
        }
     }
    return(
<div className="bmi">
    <div className="container">
     <h2>Bmi calculator</h2>  
     <form>
        <div>
            <label>weight (lbs)</label>
            <input type="text" value={weight} onChange={(Event)=>setWeight(Event.target.value)} placeholder="enter weight"/>
            <label>height (feet)</label>
            <input type="text" value={height} onChange={(Event)=>setHeight(Event.target.value)} placeholder="enter weight"/>
           
            </div>
            <div>
                <button onClick={calcbmi}>submit</button>
                <button onClick={reload}>Reload</button>
            </div>
            <div className="output">
                <h3>your bmi is :{bmi} </h3>
                <p>{message} {weight} {height}</p>
            </div>

            </form> 
        </div> </div>

 
    );
 }
 export default Bmimain