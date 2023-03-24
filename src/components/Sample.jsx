import { Typography } from '@mui/material'
import React from 'react'

const Sample = () => {
    var num=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>

      {num.map((value,index)=>{
        return <Typography key={index}>Number is {value}</Typography>
      })}
     
    </div>
  )

    }
export default Sample
