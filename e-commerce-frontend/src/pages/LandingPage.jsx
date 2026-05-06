import React from 'react'
import CarouselsContiner from '../Component/CarouselsContiner'
import DumiProducts from '../Component/DumiProducts'
import FooterComponent from '../Component/FooterComponent'

const LandingPage = () => {
   
const handleGreeting = () =>{
let txt="Welcome to Alpha mart";
 let wspeech= window.speechSynthesis;
let voice= new SpeechSynthesisUtterance(txt);
wspeech.speak(voice);

console.log(wspeech.getVoices());
}
    return (
        <div>
            <button onClick={ handleGreeting}id='greeting-btn'>voice</button>
            <CarouselsContiner />
            <h1>PRODUCTS:-</h1>
            <DumiProducts />
            <FooterComponent/>
        </div>
    )
}

export default LandingPage;