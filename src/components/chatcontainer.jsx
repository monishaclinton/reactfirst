import React from 'react'

import Leftmenu from './leftmenu'
import Box from '@mui/material/Box';
import  Appbar  from './appbar';
import Axios  from 'axios';
import ContactListComponent from './contactlistcomponent';
import 'bootstrap/dist/css/bootstrap.css';
const Chatcontainer = () => {
  return (
    <div>
      <Box >
      <Appbar/>
        <Box width="100%" >
          <ContactListComponent />
        </Box>


      </Box>

    </div>
  )
}

export default Chatcontainer