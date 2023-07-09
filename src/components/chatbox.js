import React from 'react'
import Box from '@mui/material/Box';
import  Appbar  from './appbar';

import { BrowserRouter as Router, Route, Link as Rlink, Routes, BrowserRouter,useNavigate } from "react-router-dom";
const Chatbox=() =>{
  return (
    <Box>
       <Appbar/>
    <Box   overflow="auto"
    height="90%"
    > right
   
    </Box>
    </Box>
  )
}

export default Chatbox