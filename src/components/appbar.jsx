import IconButton from "@mui/material/IconButton";
import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Typography,Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";


const Appbar = () => {
  var session_username = sessionStorage.getItem('sess_user_name')
  return (
    <div>
     

    <Box height="40px" display="flex" align-items="center"  width="100%" sx={{ background: "#1f2c33" }} >
      
    <Box flex={1} pl="5px" pr="5px" >

<Box
  width="100%"
  height="100%"
  display="flex"
  justifyContent="space-between"
  alignItems="center"
>
  <Avatar />

  <Box display="flex">
    <IconButton
      onClick={() => { }}
      sx={{
        paddingRight: "15px",
      }}
    >
      <DonutLargeIcon
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
    
  
      <Box  width="100%"  height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={() => { }}>
          <SearchIcon sx={{ color: "#afbac0", }} />
        </IconButton>
        </Box>
        <Box display="flex" flexDirection="column"  >
        <Typography  color="white" fontSize="13px" padding="10px 0px" whiteSpace="nowrap">
          {session_username.toUpperCase()}
        </Typography>
        </Box>
        <Box display="flex"  flexDirection="column" pl="9px">
         <Avatar />
         </Box>
       </Box>
       
       
       </div>
  );
}
export default Appbar;