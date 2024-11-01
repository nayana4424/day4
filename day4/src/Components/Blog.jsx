import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    var [user,SetUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        SetUser(response.data)
        console.log(response.data)
    })
  return (
    <div>
        <br/>
        <br/>
        <h1>Blog</h1>
<TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                            <TableCell>title</TableCell>
                           
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                            
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

export default Blog