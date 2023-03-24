import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]=useState("Paul")
    const changeName =()=>{
        setFname("Gouri")
    }
  return (
    <div>
    <Typography>Welcome {fname}</Typography>
    <br></br>
    <Button variant='outlined' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
