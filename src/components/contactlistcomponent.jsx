import React from 'react';
import { contactList } from './data/contactlist';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material'
import { useState,useEffect } from 'react';

const ContactComponent =(props) => {
  const { userData } = props;
  function Contacts({ contacts, changeChat }){
    const [currentSelected, setCurrentSelected] = useState(undefined);
  }
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return ( 
    
    <Box>
      <Avatar src={userData.profilePic}/>
      
      <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="body1" color="#d1d7db">
              {userData.name} 
          </Typography>
          <Typography variant="caption" color="#d1d7db">
             {userData.lastText}
          </Typography>
      </Box>
      <Typography variant="subtitle2" color="#d1d7db">
        {userData.lastTextTime}
      </Typography>
      <Box
          width="100%"
          mt="13px"
          sx={{
            border: ".05px solid #2f3b44",
          }}
        />
  </Box>
  );
};

const ContactListComponent = () => {

  return( 
      <Box>
      {/* <Box>
          <Avatar src= "/profile/profilephoto.jpeg"/>
      </Box> */}
      {contactList.map((userData)=>(
      <ContactComponent userData={userData}/>
      ))}
        </Box>
  );
};
export default ContactListComponent;