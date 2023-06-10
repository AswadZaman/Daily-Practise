import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const UseContextTwo = () => {
    const user= useContext(UserContext)
  return (
    <div>
      <h1>Component 2</h1>
      <h5>My name is {user}</h5>
    </div>
  )
}

export default UseContextTwo
