import React, { useLayoutEffect } from 'react'
import WebFont from 'webfontloader';
import Router from './Router/Router';
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif', "Montserrat"]
  }
});

function App() {
  useLayoutEffect(()=>{
    let  header = document.querySelector("title").innerHTML= "INsider"
  })
  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App