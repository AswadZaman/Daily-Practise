import React from 'react'
import { useReducer } from 'react';

const initialState=0;
const reducer = (state, action)=>{
if(action.type==="increament"){
    return state+1
}else{
   return state-1
}
}
const UseReducer = () => {
  const [state, dispatch] =  useReducer(reducer, initialState)
  return (
    <div>
      <h1> use Reducer Hook</h1>
      <p>The useReducer Hook accepts two arguments.



The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

The useReducer Hook returns the current stateand a dispatchmethod.</p>
      <h5>Example</h5>
    {state}
    <button onClick={()=>dispatch({type:"increament"}) }>Inc </button>
    <button onClick={()=>{ dispatch({type:"decreament"}) }}> Dec </button>
    </div>
  )
}

export default UseReducer
