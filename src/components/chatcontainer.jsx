import React from 'react'
import Chatbox from './chatbox'
import Leftmenu from './leftmenu'
import Box from '@mui/material/Box';
import  Appbar  from './appbar';
import ContactListComponent from './contactlistcomponent';
const Chatcontainer = () => {
  return (
    <div>
      <Box >
      <Appbar/>
        <Box width="100%" sx={{ background: "#101b20", }}>
          <ContactListComponent />
        </Box>


      </Box>

    </div>
  )
}

export default Chatcontainer