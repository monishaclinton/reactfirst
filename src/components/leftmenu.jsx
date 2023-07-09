import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import  Appbar  from './appbar';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search'
import ContactListComponent from './contactlistcomponent';
import FilterListIcon from "@mui/icons-material/FilterList";
import { Input } from '@mui/material';
import { Avatar } from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";

function Leftmenu( ) {
  return (
<Box>
    <Box   height="45px" display="flex" align-items="center"
    sx={{
      background: "#1f2c33",
      padding: "0px 20px",
    }}
  >
   
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
              onClick={() => {}}
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
              onClick={() => {}}
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
    
  </Box>
  <Box
          display="flex"
          sx={{
            background: "#1f2c33",
            borderRadius: "8px",
            padding: "0px 8px",
            margin:"10px 0px"
          }}
          flex={1}
          alignItems="center"
        >

         
  <IconButton onClick={() => {}}>
            <SearchIcon
              sx={{
                color: "#8696a1",
                height: "20px",
                width: "20px",
              }}
            />
          </IconButton>
          <Input
            fullWidth
            disableUnderline
            placeholder="Search or start a new chat"
            sx={{
              height: "35px",
              color: "white",
              padding: "0px 13px",
              fontSize: "14px",
              
            }}
          />
        
        <IconButton onClick={() => {}}>
          <FilterListIcon
            sx={{
              color: "#8696a1",
              height: "20px",
              width: "20px",
            }}
          />
        </IconButton>
        </Box>
<Box
        overflow="auto"
        height="90%"
        sx={{
          background: "#101b20",
        }}
      >
        <ContactListComponent/>

        
        
  </Box>
  </Box>
  )
}

export default Leftmenu