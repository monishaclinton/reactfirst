import IconButton from "@mui/material/IconButton";
import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Typography,Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// interface AppBarProps {
//   children: any;
// }

const Appbar = () => {
  var session_username = sessionStorage.getItem('sess_user_name')
  return (
    <div>
    <Box
      height="45px" display="flex" align-items="center"  width="94%"
      sx={{
        background: "#1f2c33",
        padding: "0px 20px",
      }}
    >

     
    
  
      <Box  width="100%"  height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={() => { }}>
          <SearchIcon 
            sx={{
              color: "#afbac0",
            }}
          />
        </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" >
        <Typography  color="white" font-size="13px" padding="10px 0px" whiteSpace="nowrap">
          {session_username.toUpperCase()}
        </Typography>
        </Box>
        <Box display="flex"  flexDirection="column" alignItems="flex-start" pl="9px">
         <Avatar />
         </Box>
       </Box>
       
       
       </div>
  );
}
export default Appbar;