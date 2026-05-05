import { useState } from "react";

const CounterFBC=(props)=>{
   
    let [count, setcount]=useState(0);
console.log(props.details);

    return(
        <>
    <h3>Function based Components</h3>
    <h1>Count {count}  </h1>
    <button onClick={()=>{setcount(count+1)}} style={styling.inc} >Increment</button>
    <button  onClick={()=>{setcount(0)}} style={styling.dec}> Reset</button>
    <button onClick={()=>{setcount(count-1)}}  style={styling.hi}>Decrement</button>
    </>
    )
}
export default CounterFBC;


 const styling={
    inc :{
        backgroundColor : "green",
        padding :"5px 20px" ,
        margin : "10px"
    },
    dec : {
        backgroundColor : "yellow",
         padding :"5px 20px",
          margin : "10px"
    },
    hi : {
        backgroundColor : "red",
         padding :"5px 20px" ,
          margin : "10px"
    }
 }