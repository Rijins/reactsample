import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Statetask = () => {
    var[pagename,setPagename]=useState()
    useEffect(()=>{
        setPagename("use Effect")
    },{})
   
  return (
    <div>
      <Button variant='outlined' color='primary'>Homepage</Button>
      <Button variant='outlined' color='secondary' >Gallery page</Button>
      <Button variant='outlined' color='error'>Contact page</Button>
      <Typography>Welcome to{pagename}</Typography>
    </div>
  )
}

export default Statetask
