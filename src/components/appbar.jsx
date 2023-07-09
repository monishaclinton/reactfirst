import IconButton from "@mui/material/IconButton";
import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// interface AppBarProps {
//   children: any;
// }

 const  Appbar= () => {
  return (
    <Box
      height="45px" display="flex" align-items="center"
      sx={{
        background: "#1f2c33",
        padding: "0px 20px",
      }}
    >
      {/* //Profile picture */}
    <Box display="flex" justifycontent="space-between"  width="100%" height="100%" align-items="center">
   <Avatar />
   
   </Box>
   <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              pl="10px"
            >
              <Typography variant="body1" color="white">
                Balram
              </Typography>
              <Typography variant="caption" color="#8496a0">
                online
              </Typography>
            </Box>
            <Box display="flex">
            <IconButton onClick={() => {}}>
              <SearchIcon
                sx={{
                  color: "#afbac0",
                }}
              />
            </IconButton>
            </Box>
  </Box>
    
  );
}
export default Appbar;