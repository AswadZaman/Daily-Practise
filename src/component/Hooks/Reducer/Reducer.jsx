import React from 'react'

const Reducer = () => {
    const arr=[1,2,3,4,5,6,7,8,9]
    const sum= arr.reduce((accum, curr)=>{
        return accum+curr
    })
  return (
    <div>
      reducer {sum}
    </div>
  )
}

export default Reducer
