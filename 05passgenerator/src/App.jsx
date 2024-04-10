import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [password,setPassword] = useState(8);
  const [numbers,setNumbers] = useState(8);
  const [symbol,setSymbol] = useState(8);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly

          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div
          className='flex items-center gap-x-1'
          >
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>setLength(e.target.value)}
            name=""
            id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div
          className='flex items-center gap-x-1'
          >
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
