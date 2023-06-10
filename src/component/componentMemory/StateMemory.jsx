import React from 'react'
import { sculptureList } from './data'
import { useState } from 'react'

const StateMemory = () => {
    // sculptureList
    const[index, setIndex]=useState(0)
    let len = sculptureList.length
    const handlePicChange=()=>{
    
if(index<len){
setIndex(index*0)
}else{
    setIndex(index+1)
}


    }
    let singlePic =sculptureList[index]
  return (
    <div>
        <button onClick={handlePicChange}>Next </button>
        <div className='img-container'>
            <h1>{singlePic.artist}</h1>
            <h3>{singlePic.name}</h3>
            <img src={singlePic.url} alt="" />
            <h5>{singlePic.description}</h5>
        </div>
      
    </div>
  )
}

export default StateMemory
