import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPhoto } from '../api/api'

function Imageid() {
    let {id} = useParams()
    console.log(id)
    let {
        data,isLoading
    } = useQuery(["photo",id],()=>{
        return getPhoto(id)
    })
  return (
    <div className='photo'>Imageid</div>
  )
}

export default Imageid