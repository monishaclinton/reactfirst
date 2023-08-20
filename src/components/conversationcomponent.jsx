
import React from 'react';

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

const  ConversationComponent= () => {
  

  return (
      <div>
        <Grid container>
             <Grid item xs={12} >
            
        
        <Box>
            {messagesList.map((messageData) => (
                <Typography isYours={messageData.senderID === 0}>
                  <Typography isYours={messageData.senderID === 0}>{[messageData.text]} </Typography>
                </Typography>
            ))}
            
        </Box>
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" placeholder='Send Message' fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default ConversationComponent;