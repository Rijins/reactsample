import { Backdrop, Button, CircularProgress, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Samplearray = () => {
    var pname =[{name:"Arjun",age:20,place:"Ekm"},
                {name:"Paul",age:19,place:"Kottayam"},
                {name:"Manu",age:21,place:"Munnar"}]
  return (
    <div>
        <TableContainer>
            <table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value,index)=>{
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </table>
        </TableContainer>
        
      
    </div>
  )
}

export default Samplearray
