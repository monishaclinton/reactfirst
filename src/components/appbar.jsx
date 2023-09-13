import IconButton from "@mui/material/IconButton";
import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from "./settings";
import Profilepage from "../profilepage";

import {Grid} from '@mui/material'
const Appbar = () => {
  var session_username = sessionStorage.getItem('sess_user_name')
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      scrollMarginLeft: drawerWidth,
    }),
  }));
  const navigate = useNavigate();
  const accsettings = () => {
      navigate("/settings");
  };
  
  const Profilepage = () => {
      navigate("/profilepage");
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div> 
      <Box sx={{ display: 'flex' }}>
           <CssBaseline />
           <AppBar position="fixed" open={open}>
           <Toolbar>
          

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' ,flexGrow:1}) }}
          >
            <MenuIcon />
            </IconButton>
            <Box flex={1} pl="5px" pr="5px"  width='100%'>
            <Box
  width="100%"
  height="100%"
  display="flex"
  justifyContent="space-between"
  alignItems="center"
>
 

  <Box display="flex">
    <IconButton
      onClick={() => { }}
      sx={{
        paddingRight: "15px",
      }}
    >
      <AddAlertIcon
        sx={{
          color: "#afbac0",
        }}
      />
    </IconButton>
    <IconButton
      onClick={() => { }}
      sx={{
        paddingRight: "10px",
      }}
    >
      <ChatIcon
        sx={{
          color: "#afbac0",
        }}
      />
    </IconButton>
    </Box>
  </Box>
</Box>
          
          <Box display="flex" flexDirection="column"  >
        <Typography  color="white" fontSize="13px" padding="10px 0px" whiteSpace="nowrap">
          {session_username.toUpperCase()}
        </Typography>
        </Box>
        <Box display="flex"  flexDirection="column" pl="9px">
         <Avatar onClick={Profilepage}/>
         </Box>
          </Toolbar>

          </AppBar>

        <Main open={open} >
        <DrawerHeader />
        </Main>
        <Drawer
        sx={{
          width: drawerWidth,
          
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
      
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Grid>
                  <Grid xs={8}>
                  
                 <SettingsIcon onClick={accsettings} Settings/> 
                  <Grid xs={4}onClick={accsettings}>Settings</Grid>
                  </Grid>
                   <Grid>
                  <GroupIcon />
                  <p>Group</p>
                  </Grid>
                  </Grid>
                </ListItemIcon>
                
                  
                <ListItemText />
              </ListItemButton>
            </ListItem>
          
        </List>
        <Divider />
        </Drawer>
        </Box>
 




       
       </div>
  );
}
export default Appbar;
  