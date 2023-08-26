
import React from 'react';
import  { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { messagesList } from "./data/contactlist";
import io from 'socket.io-client';
const ws = new WebSocket('ws://localhost:8080');

const  ConversationComponent= () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        ws.onmessage = (event) => {
          const newMessage = event.data;
          setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: 'received' }]);
        };
      }, []);
    
      const sendMessage = () => {
        if (input.trim() !== '') {
          const message = input.trim();
          ws.send(message);
          setMessages((prevMessages) => [...prevMessages, { text: message, type: 'sent' }]);
          setInput('');
        }
      };
  return (
      <div>
        <Grid container>
             <Grid item xs={12} >
            
        
        <Box>
           
        
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        
        </Box>
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" placeholder='Send Message' fullWidth value={input} onChange={(e) => setInput(e.target.value)} />
                        
                        
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon onClick={sendMessage}/></Fab>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default ConversationComponent;