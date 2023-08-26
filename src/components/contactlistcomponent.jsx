import React from 'react';
import { contactList } from './data/contactlist';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material'
import ChangeProfilePicture from './changeprofilepicture';
import { useState,useEffect } from 'react';
import Axios from 'axios';
const server_base_url = "http://localhost:3001/";
const ContactListComponent =(event,user) => {
 
  // const { userData } = props;
  const [users, setUsers] = useState([]);
  
    const data = new FormData(event.currentTarget);
    Axios.post(server_base_url + "get_user_name", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    
    .then((response) => {
      setUsers(response.data);
      console.log(response.data)

      .catch(error => {
        console.error(error);
      });
    });

   

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Fetch the latest image URL from the server
        Axios.get('http://localhost:3001/image')
            .then(response => {
                setImageUrl(response.data.imageUrl);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleImageUpload = event => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        Axios.post('http://localhost:3001/upload', formData)
            .then(response => {
                console.log(response.data);
                // Refresh the displayed image
                setImageUrl(`http://localhost:3001/uploads/${event.target.files[0].name}`);
            })
            .catch(error => {
                console.error(error);
            });
    };
  
  return (  
    
    <Box>
         {users.map(user => (
          <div key={user.id} className="user-card" type="file" onChange={handleImageUpload}>
            <h2>{user.username}</h2>
            <img src={imageUrl} alt="User Uploaded" type="file" onClick={handleImageUpload}/>
            {/* <input type="file" accept="image/*"  /> */}
          </div>
        ))}
  
     
         
      <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="body1" color="#d1d7db" width="100%">
          
          {users.map((user, index) => (
          <p key={index}>{user.user_firstname} {user.user_lastname}</p>
        ))}
      
          </Typography>
          <Typography variant="caption" color="#d1d7db">
             {/* {userData.lastText} */}
          </Typography>
      </Box>
      <Typography variant="subtitle2" color="#d1d7db">
        {/* {userData.lastTextTime} */}
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

// const ContactListComponent = () => {

//   return( 
//       <Box>
//       <Box>
//           <Avatar src= "/profile/profilephoto.jpeg"/>
//       </Box>
//       {contactList.map((userData)=>(
//       <ContactComponent userData={userData}/>
//       ))}
        
//         </Box>
//   );
// };
export default ContactListComponent;