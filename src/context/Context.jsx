import React, { createContext, useEffect, useState } from 'react'

export let userContext = createContext()
function Context({Children}) {
    let [theme,setTheme] = useState("light")
    let [currentwindow,setWindow] = useState("wide");
    let [searchparam,setSearch] = useState()

    

    let toggletheme = ()=>{
        if (theme == "light") {
          setTheme("dark")
        }
        else {
          setTheme("light")
        }
    }
    let updateWindow = () =>{
      let Wi = window.innerWidth
      if(Wi > 1200) {
          setWindow("wide")
      }
      else if(1200 > Wi && Wi > 500) {
          setWindow("medium")
      }
      if (Wi < 500) {
          setWindow("small")
      }

    }
    useEffect(()=>{
      window.addEventListener("resize",()=>{
          updateWindow()
      })
    },[])
    let [column,setColumn] = useState(4)
    let updateColumn = () => {
        switch (currentwindow) {
            case "wide": 
                setColumn(4)
                break;
            case "medium": 
                setColumn(3)
                break;
            case "small": 
                setColumn(2)
                break;        
            default:
                break;
        }
    }
    
    let values = {theme,toggletheme,setWindow,updateWindow,currentwindow,searchparam,setSearch,column,updateColumn}

  return (
    <userContext.Provider value={values}>
        {Children}
    </userContext.Provider>
  )
}

export default Context