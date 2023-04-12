import { IconBell, IconNotification, IconSearch } from '@tabler/icons-react'
import React, { useContext } from 'react'
import { userContext } from '../context/Context'

function Header() {
    let {searchparam,setSearch} = useContext(userContext)
  return (
    <div className="header">

        <div className="header_logo">
            <h2>IN</h2>pic
        </div>
        <form className='search' onSubmit={e=>{
            e.preventDefault()
            console.log(e.target[0].value)
            setSearch(e.target[0].value)
        }
        }>
            
            <input type="text" placeholder='Search here....' name="" id="" />
            <button><IconSearch/></button>
            
        </form>
        
    </div>
  )
}

export default Header