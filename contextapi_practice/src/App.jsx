import { useState } from 'react'

import './App.css'
import Home from '../components/context/Home'
import ContextProv from '../components/context/ContextProv'
ContextProv
function App() {
  const [count, setCount] = useState(0);
    

  return (
    <>
    <ContextProv>
      <Home />
    </ContextProv>
    </>
  )
}

export default App
