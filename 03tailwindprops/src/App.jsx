import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Cards';

function App() {
  const boi = {
    name: "Kanha",
    hello: "yo"
  };

  return (
    <>
      <Card boi={boi} />
      <Card boi={boi} />
      <Card />
      <Card />
    </>
  );
}

export default App;
