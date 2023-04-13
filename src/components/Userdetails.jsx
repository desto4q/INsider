import React from 'react'
import {ImageDownloader} from "@samvera/image-downloader"
import Dropdown from "rc-dropdown"
function Userdetails({name,link,options,url}) {
  
  
  let String= url.replace("https://www.pexels.com/photo/","").replace("/","")
  console.log(String)

  // { Object.entries(options).map((entry)=>{

  //   return(
  //     <ImageDownloader
  //       imageTitle={String}
  //       imageUrl={entry[1]}
  //       className={"my_dl"}
  //     >
  //       {entry[0]}
  //     </ImageDownloader>
  //   )
  // })}
  return (
    <div className="userdetails">
        <div className="username">
            <p className='username'>{name}</p>
            <a href={link} target='_blank'>Follow .</a>
        </div>
        
    </div>
  )
}

export default Userdetails