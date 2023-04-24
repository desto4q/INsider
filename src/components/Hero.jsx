import { IconSearch } from '@tabler/icons-react'
import React from 'react'

function Hero() {
  return (
    <div className="hero">
      <img src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className='background ' alt="" />
      <div className="hero_info">
        <h2>The best free stock photos, royalty free images & videos shared by creators.</h2>
        <form action="" className='search'>
          <input type="text" name="" id="" /> 
          <button><IconSearch/></button>
        </form>
          
      </div>
    </div>
  )
}

export default Hero