import React from 'react'
import Chatbox from './chatbox'
import  Leftmenu  from './leftmenu'
import Box from '@mui/material/Box';
const Chatcontainer=() =>{
  return (
    <div>
      <Box display="flex" flexdirection="row" height="100vh">
      <Box width="40%"  sx={{
      background: "#101b20",
    }}>
      <Leftmenu />
      </Box> 
      <Box width="60%"  sx={{
    background: "#101b20",
    border: ".05px solid #2f3b44",
    }}>
      <Chatbox />
      </Box>
      </Box>
      
    </div>
  )
}

export default Chatcontainer