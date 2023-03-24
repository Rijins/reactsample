import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter =()=>{
    var[num,setNum]=useState(0)
   const inc =()=>{
    setNum(++num)
   }
   const dec =()=>{
    setNum(--num)
   }
  return (
    <div><br />
        <Typography>{num}</Typography>
        <br />
      <Button variant='outlined' color='error' onClick={inc}>+</Button>
      <br /><br />
      <Button variant='outlined' color='success' onClick={dec}>-</Button>
    </div>
  )
}

export default Counter
