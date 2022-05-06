import * as React from 'react'
import { LOGIN_ROUTE } from '../../consts/routes'
import { AppBar, Toolbar, Typography, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'

const AppHeader = () => (
 <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  <Toolbar>
   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    GYM CRM
   </Typography>
   <Link component={NavLink} to={LOGIN_ROUTE}>
    <Typography sx={{ color: 'white' }}>Login</Typography>
   </Link>
  </Toolbar>
 </AppBar>
)

export default AppHeader
