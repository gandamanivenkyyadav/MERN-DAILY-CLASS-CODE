import React from 'react'

 

const App = () => {
function app() {
  const handleIncrement = ()=>{
    setCount(count + 1);
  }
}

  return (
    <div className="bg-[url(https://wallpapers-clan.com/wp-content/uploads/2024/07/marvel-deadpool-katanas-desktop-wallpaper-preview.jpg)] h-500 w-delay-300 flex flex-col justify-center items-center" >
   
      <h1 className='text-center font-bold bg-amber-100 m-5 p-5 italic rounded-4xl shadow-2xl shadow-red-500  ' >sample project</h1>
      <h2 className="backdrop:blur-2xl w-50  font-bold shadow-2xl shadow-amber-500 font-bold rounded-4xl text-black text-center bg-amber-200 m-5 p-5 " > Welcome to Tailwind</h2>

      <button onClick={handleIncrement}  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl hover:bg-blue-600 cursor-pointer " >Increment++ </button>
      <button className="text-2xl font-bold" >Count</button>     
  <div className="grid-cols-4 gap-x-2 gap-y-2 grid bg-blue-200 rounded-2xl p-10" >
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black" ></div>
  </div>

</div>


 

  )
}

export default App