import React, { useContext } from 'react'
import context_creation from './context_creation'

function Home() {
    const a = useContext(context_creation)

  return (
    <h1>This is {a.name} and {} i am of age {a.age}</h1>
  )
}

export default Home