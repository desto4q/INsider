import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
// import Packery from 'packery';
// import {Masonry}from "react-masonry"

import pickRandom from 'pick-random';
// import Masonry from 'react-masonry-css'
import Layout from 'react-masonry-list'
import { useQuery } from 'react-query';
import { userContext } from '../context/Context';
import { client, query } from '../api/api';


function Feed() {
    let [content,setContent] = useState([])
    let {currentwindow} = useContext(userContext)
    let [column,setColumn] = useState(4)
    let updateColumn = () => {
        switch (currentwindow) {
            case "wide": 
                console.log("wide")
                setColumn(4)
                break;
            case "medium": 
                console.log("medium")
                setColumn(2)
                break;
            case "small": 
                console.log("small")
                setColumn(1)
                break;
        
            default:
                break;
        }
    }
    useEffect(()=>{
        updateColumn()
    },[currentwindow])

  const {data} = useQuery("ewdata", ()=>{
    client.photos.curated({per_page: 50}).then(media => {
        let ph = [media.photos]
        setContent(...ph)
        console.log(content)
    })
  })
    
    // const empty = new Array(1,2,3,4,5,6,7,7,820)
    
    let items = content.map(({src,id})=>{
        let size = src.medium
        return (
            <Card img={size} key={id}/>
        )
    })
  return (
        <div className="feed">
            <Layout colCount={column} minWidth={200} className='masonry' items={items}>
                
            </Layout>
        </div>
        )
}

export default Feed