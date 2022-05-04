import * as React from 'react'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppDrawer from '../../components/AppDrawer/AppDrawer'
import Box from '@mui/material/Box'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
 <Box sx={{ display: 'flex' }}>
  <AppHeader />
  <AppDrawer />
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   {children}
  </Box>
 </Box>
)

export default MainLayout
