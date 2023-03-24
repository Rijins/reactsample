import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const StateEffect = () => {
    var[mpoocha,kpoocha]=useState();
    useEffect(()=>{
        kpoocha("arjun")
    },[])

  return (
    <div>
      <Typography variant='h1'>{mpoocha}</Typography>
    </div>
  )
}

export default StateEffect
