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
      height="45px" display="flex" align-items="center"
      sx={{
        background: "#1f2c33",
        padding: "0px 20px",
      }}
    >

     
    
    <Box display="flex"  alignItems="right"  >
        <IconButton onClick={() => { }}>
          <SearchIcon
            sx={{
              color: "#afbac0",
            }}
          />
        </IconButton>
      
        <Typography  color="white">
          {session_username.toUpperCase()}
        </Typography>
        <Box alignItems="right">
         <Avatar />
         </Box>
       </Box>
       </Box>
       
       </div>
  );
}
export default Appbar;