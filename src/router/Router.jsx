import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sidebar from '../components/Sidebar'

function Router() {
  return (
    <BrowserRouter>
    <Sidebar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router