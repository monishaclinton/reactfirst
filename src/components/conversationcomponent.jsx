import React from 'react';
import { useState, useEffect } from 'react';
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

import Axios from 'axios';
import { Button } from '@mui/material';


const server_base_url = "http://localhost:3001/";

const ConversationComponent = (props) => {
    const [input, setInput] = useState('');
  
    // const [messages, props_msg] = useState([]);
    // useEffect(() => {
    //     ws.onmessage = (event) => {
    //         const newMessage = event.data;
    //         setMessages((prevMessages) => [...prevMessages, { text: newMessage, type: 'received' }]);
    //     };
    // }, []);

    // props_msg(props);
    // console.log(props)
    var session_id = sessionStorage.getItem('sess_user_id');

    const sendMessage = () => {
        var input_sent_message = document.getElementById('input_sent_message').value;
        if (input_sent_message != '') {
            document.getElementById('main_chat_div').innerHTML += "<p><span >" + input_sent_message + "</span></p>";
            document.getElementById('input_sent_message').value = "";

            Axios.post(server_base_url + "insert_chat_message", { receiver_id: props.receiverid, sender_id: session_id, chat_message: input_sent_message }).then((response) => {
                // setUsers(response.data);
                // console.log(response.data)
                // setsentChatProps(response.data)
            });


        }

    };
    return (
        <div>
            <Grid container>
                <Grid item xs={12} style={{}} >


                    <Box height="69vh" overflow="scroll"  word-break="break-all">
                        {props.propsArray.map((message, index) => (
                            <div key={index} align={(session_id == message.sender_id) ? 'right' : 'left'}>
                                <span style={{marginTop:"5px"}} className='btn btn-secondary btn-sm'> &nbsp;  {message.message_text}&nbsp;</span>
                              
                            </div>
                        ))}
                        <div align="right" id='main_chat_div' style={{backgroundColor:"#484848de",borderRadius:"5px",marginTop:"5px"}}></div>
                    </Box>
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <textarea placeholder='Send Message' id='input_sent_message'  style={{ width: '100%' }} />


                        </Grid>
                        <Grid item xs={1} align="right">
                            <Button onClick={sendMessage} ><SendIcon /></Button>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConversationComponent;