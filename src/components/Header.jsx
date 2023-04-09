import { IconBell, IconNotification, IconSearch } from '@tabler/icons-react'
import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className='search'>
            <input type="text" name="" id="" />
            <button><IconSearch/></button>
        </div>
        <div className='tools'> 
            <span>
                <IconBell/>
            </span>
            <span>
                <IconNotification/>
            </span>
            <button>
                Add Photos
            </button>
        </div>
    </div>
  )
}

export default Header