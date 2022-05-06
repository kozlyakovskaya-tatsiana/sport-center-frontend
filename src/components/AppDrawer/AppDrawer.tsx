import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Drawer, Link } from '@mui/material'
import { Divider, List, ListItem, ListItemIcon } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import GroupsIcon from '@mui/icons-material/Groups'
import PaymentIcon from '@mui/icons-material/Payment'
import AssessmentIcon from '@mui/icons-material/Assessment'
import MapIcon from '@mui/icons-material/Map'
import { NavLink } from 'react-router-dom'
import {
 GROUPS_ROUTE,
 LOCATIONS_ROUTE,
 PRICE_ROUTE,
 PROFILE_INFO_ROUTE,
 REPORTS_ROUTE,
 SCHEDULE_ROUTE,
} from '../../consts/routes'

const drawerWidth = 240

interface DrawerMenuItem {
 text: string
 icon?: JSX.Element
 navLinkTo: string
}

const drawerUpMenuItems: DrawerMenuItem[] = [
 { text: 'Schedule', icon: <CalendarTodayIcon />, navLinkTo: SCHEDULE_ROUTE },
 { text: 'Groups', icon: <GroupsIcon />, navLinkTo: GROUPS_ROUTE },
 { text: 'Price', icon: <PaymentIcon />, navLinkTo: PRICE_ROUTE },
 { text: 'Reports', icon: <AssessmentIcon />, navLinkTo: REPORTS_ROUTE },
 { text: 'Locations', icon: <MapIcon />, navLinkTo: LOCATIONS_ROUTE },
]

const drawerDownMenuItems: DrawerMenuItem[] = [
 { text: 'Personal', icon: <PersonIcon />, navLinkTo: PROFILE_INFO_ROUTE },
]

const AppDrawer: React.FC = () => (
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
       <ListItemIcon>{item?.icon}</ListItemIcon>
       <Link to={item.navLinkTo} component={NavLink}>
        {item?.text}
       </Link>
      </ListItem>
     ))}
    </List>
    <Divider />
    <List>
     {drawerDownMenuItems?.map((item) => (
      <ListItem key={item?.text} button>
       <ListItemIcon>{item?.icon}</ListItemIcon>
       <Link
        component={NavLink}
        to={item.navLinkTo}
        style={{ textDecoration: 'none' }}
       >
        {item?.text}
       </Link>
      </ListItem>
     ))}
    </List>
   </Box>
  </Drawer>
 </Box>
)

export default AppDrawer
