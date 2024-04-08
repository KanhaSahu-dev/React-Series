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
      <div className='absolute bottom-10 rounded-lg bg-white '>
      <button className="bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black border-gray-950" onClick={()=>changeColor('red')}>test</button>
      <button className="bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black border-black" onClick={()=>changeColor('green')}>test</button>
      <button className="bg-white outline-none px-4 py-1 rounded-full shadow-lg text-black border-black" onClick={()=>changeColor('blue')}>test</button>
      </div>
    </div> 
  )
}

export default App
