import React, { createContext, useState } from 'react'

export let userContext = createContext()
function Context({Children}) {
    let [theme,setTheme] = useState("light")



    let toggletheme = ()=>{
        if (theme == "light") {
          setTheme("dark")
        }
        else {
          setTheme("light")
        }
    }


    
    let values = {theme,toggletheme}

  return (
    <userContext.Provider value={values}>
        {Children}
    </userContext.Provider>
  )
}

export default Context