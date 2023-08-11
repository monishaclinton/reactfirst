import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';
import Axios from 'axios';


const server_base_url = "http://localhost:3001/";
function Register() {
    // const [value, setValue] = useState("");
    // const handleChange = (e) => {
    //     setValue = (e.target.value);
    //     console.log(e.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault(); //ithu form submit aagi another page ku pooratha stop pannum
        // alert()
        const data = new FormData(event.currentTarget); // to get all form datas
        Axios.post(server_base_url + "register_user", data, {   //it is use to sent the data to another server ..similar to ajax without page loading to push data in data
            headers: {
                "Content-Type": "application/json"    //its converts the data to json data and sent to mentioned url 
            }
        })
            .then((response) => {    //response get the data from express server returned data
                // console.log(response.data)
                if (response.data.affectedRows) {
                    alert("User Successfully Added")
                    window.location.replace('http://localhost:3000/');
                } else if (response.data == "failed") {
                    alert('This Mail Id is Already Registered');
                } else {
                    alert("An Error Occurred...!");
                    // setIsFormInvalid(true) 
                }

            });

    };



    return (
        <div>

            <Container maxWidth="xs">


                <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >


                    <Box component="form" onSubmit={handleSubmit} >
                        <TextField margin="normal" fullWidth label="Your First Name" name="first_name" required />
                        <TextField margin="normal" fullWidth label="Your Last Name" name="last_name" required />
                        <TextField margin="normal" fullWidth id="email" label="Your Email Address" name="email" required />
                        <TextField margin="normal" fullWidth name="password" label="Your Password" type="password" id="password" required />
                        <TextField margin="normal" fullWidth name="confirm_password" label="confirm Password" type="password" id="confirm_password" required />
                        <InputMask mask="(+99)9999999999" >
                            {() => <TextField label="Your Mobile Number" fullWidth name='mobile_number' id='mobile_number' />}
                        </InputMask>
                        <TextField margin="normal" fullWidth label="Your DOB" name="date_of_birth" required />
                        <Box > <Link href="#" > Sent OTP </Link></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 1 }}> <Button type="submit" variant="contained"> Create Account </Button>
                        </Box>




                    </Box>
                </Box>

            </Container>
        </div>


    );
}
export default Register