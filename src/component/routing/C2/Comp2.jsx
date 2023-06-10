import React from 'react'
import { useLocation } from 'react-router-dom'

const Comp2 = () => {
    const location = useLocation();
    console.log({location})
    const {name, age, tech } = location?.state?.userId
    // const userId = new URLSearchParams(location.search).get(`userId`)
  return (
    <div>
      <h2>Component 2</h2>
      <h5>{ name}</h5>
      <h5>{ age}</h5>
      <h5>{ tech}</h5>
    </div>
  )
}

export default Comp2
