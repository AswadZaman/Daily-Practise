import React from 'react'
import { useNavigate } from 'react-router-dom'

const Comp1 = () => {
    const navigate=useNavigate()
    const userId= {
        name:"aswad",
        age:"20",
        tech:"React"
    };
    const handleRoute=()=>{
navigate(`/comp2`, {state:{userId:userId}})
    }
  return (
    <div>
      <h1>Component One</h1>
      <button onClick={handleRoute}> Navigate </button>
    </div>
  )
}

export default Comp1
