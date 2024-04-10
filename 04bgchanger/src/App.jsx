import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");
  function changeColor(color){
    setColor(color);
  }
  return (
    <div className="w-full h-screen duration-200 bg-black relative flex justify-center" style={{backgroundColor:color}}>
      <div className='absolute bottom-10 rounded-lg bg-white w-72 flex justify-evenly'>
      <button className=" px-4 py-1   bg-red-500  rounded-full shadow-lg text-black" onClick={()=>changeColor('red')}>test</button>
      <button className=" px-4 py-1   bg-green-500  rounded-full shadow-lg text-black" onClick={()=>changeColor('green')}>test</button>
      <button className=" px-4 py-1   bg-blue-500  rounded-full shadow-lg text-black" onClick={()=>changeColor('blue')}>test</button>
      </div>
    </div> 
  )
}

export default App
