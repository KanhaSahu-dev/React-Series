import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const counter=15;
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <h1>A small Counter App:-</h1>
      <h2>{counter}</h2>
      <button>AddValue</button>
      <button>RemoveValue</button>
    </>
)
