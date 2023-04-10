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
import { client, fetchPexels, query } from '../api/api';


function Feed() {
    let {currentwindow,searchparam} = useContext(userContext)
    let [column,setColumn] = useState(4)
    let updateColumn = () => {
        switch (currentwindow) {
            case "wide": 
                console.log("wide")
                setColumn(4)
                break;
            case "medium": 
                console.log("medium")
                setColumn(3)
                break;
            case "small": 
                console.log("small")
                setColumn(2)
                break;
        
            default:
                break;
        }
    }
    useEffect(()=>{
        updateColumn()
    },[currentwindow])
    

    const {data, isLoading} = useQuery(["newdata",searchparam], ()=> {
            return fetchPexels(searchparam)
    })

    
       return (
        <div className="feed">
            {isLoading == true ? <>isLoading</>:
                
            <Layout colCount={column} minWidth={200} className='masonry' items={data.map(({id,photographer,src,photographer_url,url})=>{
                return (
                    <Card key={id} user={photographer} img={src.medium} source={url} origin={photographer_url}/>
                )
            })}>
                                
            </Layout>
            }
        </div>
    )
  
}

export default Feed