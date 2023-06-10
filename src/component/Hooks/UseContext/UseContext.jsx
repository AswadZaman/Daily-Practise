import React, { createContext, useState } from 'react'
import UseContextTwo from './UseContextTwo'
export const UserContext = createContext()
const UseContext = () => {
    const [user, setUser]= useState('Aswad Zaman')
  return (
    <div>
        <UserContext.Provider  value={user}>
      <>UseContext</>
      <UseContextTwo/>
      </UserContext.Provider>
    </div>
  )
}

export default UseContext
