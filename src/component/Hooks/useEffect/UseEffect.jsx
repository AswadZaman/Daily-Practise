import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const UseEffect = () => {
    // const[count, setCount]=useState(1)
    const[width, setWidth]= useState(window.screen.width)
  
   const count = useRef(0)
   const handleInc=()=>{
    count.current = count.current + 1
   }
   const widthCheck=()=>{
    setWidth(window.innerWidth)
   }
    useEffect(()=>{
        console.log("INside UseEffect")
         window.addEventListener("resize", widthCheck )
        // return ()=> {
        // console.log("Cleanup")
        // }
       
            // setCount((count) => count + 1);
         
    })
  return (
    <div>
        <h1> UseEffect </h1>
        <h6>{count.current}</h6>
      <button onClick={()=> handleInc()}> click Me</button>
      <h1> The Actual Size Of Screen</h1>
      <h5>{width}</h5>
    </div>
  )
}

export default UseEffect
