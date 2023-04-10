import { IconLink, IconUserCircle } from '@tabler/icons-react'
import React from 'react'

function Card({card,img,title,user,userimg, origin,source}) {
  return (
    <div className={"card"}>
      <div className="to_original">
        <div className='options'>
          <a className='person' href={origin} target='_blank'>
            {user}
          </a>
          <a href={source}  className='link' target='_blank'>
            <IconLink/>
          </a>
        </div>
      </div>
      <img className='main_img' loading='lazy' src={img} alt="" />
      <div className='user'>
        {title && <h4>{title}</h4>}
        {user && <div className='info'>{userimg ?
          <img src={userimg} alt="" /> :  <IconUserCircle/>
        } <p>{user}</p> </div>}
      </div>
    </div>
  )
}

export default Card