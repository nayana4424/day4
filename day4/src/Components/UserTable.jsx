import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const UserTable = () => {
    var [user,SetUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        SetUser(response.data)
        console.log(response.data)
    })
  return (
    <div>
        <br/>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>city</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                        </TableRow>
                    )
                    })
                }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UserTable