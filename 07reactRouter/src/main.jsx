import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubfileinfo} from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />}/>
      <Route path='User/' element={<User />}>
        <Route path=':useData'  element={<User/>} />
      </Route>
      <Route loader={githubfileinfo} path='Github'  element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
