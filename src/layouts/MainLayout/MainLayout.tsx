import * as React from 'react'
import AppHeader from '../../components/AppHeader/AppHeader'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import { CssBaseline, Toolbar } from '@mui/material'
import AppDrawer from '../../components/AppDrawer/AppDrawer'

const MainLayout: React.FC = () => (
 <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppHeader />
  <AppDrawer />
  <Box sx={{ flexGrow: 1, p: 3 }}>
   <Toolbar />
   <Outlet />
  </Box>
 </Box>
)

export default MainLayout
