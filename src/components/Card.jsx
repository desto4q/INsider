import React from 'react'

function Card({card,img}) {
  return (
    <div className={"card"}>
      <img src={img} alt="" />
    </div>
  )
}

export default Card