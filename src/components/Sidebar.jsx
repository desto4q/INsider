import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/Context'
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { navLinks } from '../data/data';
import { IconLogout, IconSettings } from '@tabler/icons-react';

function Sidebar() {
  let {toggletheme,theme} = useContext(userContext)
  let [themeState,setThs] = useState(false)
  let setTheme = () => {
    if (theme== "light") {
      setThs(false)
    }
    else {
      setThs(true)
    }
  }
  useEffect(()=>{
    setTheme()
    console.log("i rerenderd")
  },[theme])
  return (
    <div className="sidebar">
        <span className='logo'>
          <div><h2>IN</h2>sider</div>
        </span>
        <span className='links'>
          {navLinks.map(({name,to,Icon},key)=>{
            return(
              <Link to={to} key={key}><Icon/> {name} </Link>
            )
          })}
        </span>
        <span className='settings'>
          <button><IconSettings/>Settings</button>
          <button><IconLogout/> Logout</button>
          <div className='theme_toggle'>
            
            <DarkModeToggle  id='theme_toggler'  onChange={toggletheme} isDarkMode={themeState} speed={10} size={"32px"}/>
          </div>
        </span>
    </div>
  )
}

export default Sidebar