import React, { useContext, useLayoutEffect } from 'react'
import WebFont from 'webfontloader';
import Router from './Router/Router';
import "./App.scss"
import { userContext } from './context/Context';
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif', "Montserrat"]
  }
});

function App() {
  useLayoutEffect(()=>{
    let  header = document.querySelector("title").innerHTML= "INsider"
  })
  let {theme} = useContext(userContext)
  console.log(theme)
  return (
    <div className="App" id={theme}>

      <Router/>
    </div>
  )
}

export default App


