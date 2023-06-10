import React from 'react'
import { TextField } from '@mui/material'
import { useState } from 'react'

const InputField = ({label, value, setValue , name}) => {
    
  return (
    <div>
      <TextField id="standard-basic" name={name} label={label} variant="standard" value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default InputField
