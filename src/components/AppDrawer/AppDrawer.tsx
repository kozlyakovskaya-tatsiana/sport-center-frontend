import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Drawer } from '@mui/material'
import {
 Divider,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
} from '@material-ui/core'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import PersonIcon from '@mui/icons-material/Person'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import GroupsIcon from '@mui/icons-material/Groups'
import PaymentIcon from '@mui/icons-material/Payment'
import AssessmentIcon from '@mui/icons-material/Assessment'
import MapIcon from '@mui/icons-material/Map'

const drawerWidth = 240

const drawerUpMenuItems: Array<{ text: string; icon?: JSX.Element }> = [
 { text: 'Schedule', icon: <CalendarTodayIcon /> },
 { text: 'Groups', icon: <GroupsIcon /> },
 { text: 'Price', icon: <PaymentIcon /> },
 { text: 'Reports', icon: <AssessmentIcon /> },
 { text: 'Locations', icon: <MapIcon /> },
]

const drawerDownMenuItems: Array<{ text: string; icon?: JSX.Element }> = [
 { text: 'Personal', icon: <PersonIcon /> },
]

const AppDrawer = () => (
 <Box sx={{ display: 'flex' }}>
  <Drawer
   variant="permanent"
   sx={{
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
   }}
  >
   <Toolbar />
   <Box sx={{ overflow: 'auto' }}>
    <List>
     {drawerUpMenuItems?.map((item) => (
      <ListItem key={item?.text} button>
       <ListItemIcon>{item?.icon ?? <InboxIcon />}</ListItemIcon>
       <ListItemText primary={item?.text} />
      </ListItem>
     ))}
    </List>
    <Divider />
    <List>
     {drawerDownMenuItems?.map((item) => (
      <ListItem key={item?.text} button>
       <ListItemIcon>{item?.icon ?? <InboxIcon />}</ListItemIcon>
       <ListItemText primary={item?.text} />
      </ListItem>
     ))}
    </List>
   </Box>
  </Drawer>
 </Box>
)

export default AppDrawer
