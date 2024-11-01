import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography variant='h4'>Api</Typography>
            &nbsp;
            
            <Link to='/b'>
            <Button variant='contained'>Blog</Button>
            </Link>
            <Link to='/u'>
            <Button variant='contained'>UserTable</Button>
            </Link>
            <Link to='/l'>
            <Button variant='contained'>Listmap</Button>
            </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar