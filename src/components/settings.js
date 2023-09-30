import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";
import AddAlertIcon from '@mui/icons-material/AddAlert';
function Settings() {
  return (
    <div>
    <Avatar/>
    
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
      <p style={{}}>Notification</p>
      </IconButton>
    </div>
  )
}

export default Settings;