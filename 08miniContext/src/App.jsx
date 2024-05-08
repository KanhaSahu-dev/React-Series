import React from 'react'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import { useContext } from 'react'
import UserContextProvider from './components/context/UserContextProvider'
function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    
  )
}

export default App