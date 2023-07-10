import { Avatar, Box ,Input, Typography} from "@mui/material";
import React from 'react'
import { messagesList } from "./data/contactlist";


const ConversationComponent = () => {
    return (
    <Box>
        <Box>
        <Avatar src="/profile/IMG_3464.jpg" />
        Anubhav Sharma
        </Box>
        <Box>
            {messagesList.map((messageData) => (
                <Typography isYours={messageData.senderID === 0}>
                  <Typography isYours={messageData.senderID === 0}>{[messageData.text]} </Typography>
                </Typography>
            ))}
            
        </Box>
        <Box>
            
            {/* <Image src={"/data.svg"}/> */}
            <Input placeholder="Type a message"/>
            
        </Box>
        </Box>
    );
};
export default ConversationComponent;