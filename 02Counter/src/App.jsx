import { useState } from 'react'
import './App.css'


function App() {
  const [counter,setCount] = useState(15);
  let update=()=>setCount(counter+1);
  let Delete=()=>setCount(counter-1);
  return (
    <>
      <h1>A Small Counter Project</h1>
      <h2>{counter}</h2>
      <button onClick={update}>AddValue</button>{" "}
      <button onClick={Delete}>RemoveValue</button>
    </>
  )
}

export default App
