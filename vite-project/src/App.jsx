import React  from "react";
import Registerform from "./Registerform";
import Nav from './Components/Nav'
import Counter from "./Components/Counter";
import CounterFBC from "./Components/CounterFBC";
import DisplayMyDetails from "./Components/DisplayMyDetails";

const App=()=>{
 
  let DisplayMyDetail={
    Name : "gandamani venkata ramana",
    RollNo : "23NR1A0554",
    Course : "CSE",
    Collage : "BITS Vizag",

  }
 

  return(
    <p>
    <Nav/>
    <Counter/>
    <CounterFBC/>
      <DisplayMyDetails mydata={DisplayMyDetail}/>
    </p>
  );
};
export default App;