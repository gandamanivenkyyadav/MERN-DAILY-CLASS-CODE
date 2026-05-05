 import { Component } from "react";

 class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
    }
    }
    render(){
        return(
            <>
          <h1 >count :  {this.state.count}</h1> 
          <button  onClick={()=> {this.setState((pre)=>{
            return{count:pre.count+1}})}} style={styling.dec} >Increment++</button>
          <button onClick={()=> {this.setState((pre)=>{
            return{count:pre.count-1}})}} style={styling.inc} >Decrement--</button>  
          <button onClick={()=> {this.setState((pre)=>{
            return{count:0}})}} style={styling.hi} >reset</button>       
            </>
        )
    }
 }
 export default Counter;


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
