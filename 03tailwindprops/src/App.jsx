import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Cards';

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-50 p-3 rounded-md'>Vite with TailWind</h1>
      <Card />
    </>
  )
}

export default App
