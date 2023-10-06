import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
import Profilepage from "../pages/profilepage";
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import button from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PaperProps } from "@mui/material";
import { Grid } from '@mui/material'
import Axios from 'axios';
import Login from "../pages/login";
import { SignalCellularNull } from "@mui/icons-material";

const Appbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  
  var sess_user_id = sessionStorage.getItem('sess_user_id')
  var session_username = sessionStorage.getItem('sess_user_name')
  const [uploadedImage, setUploadedImage] = useState(null);
    
  const server_base_url = "http://localhost:3001/";
  
  
   
    const openmodal = Boolean(anchorEl);
    const handleClick = (event) => {
      console.log('Button clicked:', event.currentTarget);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      console.log('Menu closed');
      setAnchorEl(null);

    };
  


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

  const handleFileUpload = (event) => {


    if (event.target.files[0]) {
      try {
        var file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl); // Store the uploaded image in state
        const formData = new FormData();
        formData.append('image', file);
        Axios.post(server_base_url + "upload-image?userid=" + sess_user_id, formData).then((response) => {
          sessionStorage.setItem('uploadedImage', response.data.image_url);
          })
      } catch (error) {
        console.error('Error creating object URL:', error);
      }
    }


  };
  useEffect(() => {
    const profile_image_url = sessionStorage.getItem('uploadedImage');
    setUploadedImage(profile_image_url);
  }, []);

  const navigate = useNavigate();
  const Logout = () => {
    navigate("/login");
  };
  
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
              sx={{ ...(open && { display: 'none', flexGrow: 1 }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box flex={1} pl="5px" pr="5px" width='100%'>
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
              <Typography color="white" fontSize="13px" padding="10px 0px" whiteSpace="nowrap">
                {session_username.toUpperCase()}
              </Typography>
            </Box>
        
            <Box display="flex" flexDirection="column" pl="9px">
            
         
      <div>
    
      
                
              
                <IconButton
                  id="demo-positioned-button"
                  aria-controls={openmodal ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openmodal ? 'true' : undefined}
                  onClick={handleClick}
                
                  // onClick={handleOpen}
                >
                  <Avatar src={uploadedImage} alt="User Avatar" /> 
                  </IconButton>
               
              <Menu
              
        id="demo-positioned-menu"
       
        anchorEl={anchorEl}
        open={openmodal}
        onClose={handleClose}
 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
       
        
      >
        <MenuItem onClick={Profilepage}>Profile</MenuItem>
        <MenuItem onClick={Logout}>My account</MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
     
      </div>
             
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

            
                  <Grid container spacing={2} onClick={accsettings}>
                    <Grid item xs={4} >

                      <SettingsIcon /></Grid>
                    <Grid item xs={8} >Settings</Grid>
                    </Grid>
                    <Grid container spacing={2} style={{marginTop:"10px"}}>

                    <Grid item xs={4} >
                      <GroupIcon />
                    </Grid>
                    <Grid item xs={8} >Group</Grid>
                    </Grid>

               
            

          </List>
          <Divider />
        </Drawer>
        
      </Box>
    </div>
  );
}

export default Appbar;