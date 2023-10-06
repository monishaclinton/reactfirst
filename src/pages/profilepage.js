import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Profilepage(props) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const server_base_url = "http://localhost:3001/";
  const sess_user_id = sessionStorage.getItem('sess_user_id');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    Axios.post(server_base_url + "get_user_row_by_user_id", { userid: sess_user_id })
      .then((response) => {
        document.getElementById('profile_username').innerText = response.data[0].user_firstname;
        document.getElementById('profile_email').innerText = response.data[0].user_email;
        document.getElementById('profile_phnno').innerText = response.data[0].user_phnno;
      });
  }, []);
  

  const handleFileUpload = async (event) => {
    if (event.target.files[0]) {
      try {
        var file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);

        const formData = new FormData();
        formData.append('image', file);

        setIsUploading(true);

        
        for (let percentage = 0; percentage <= 100; percentage += 15) {
          await new Promise(resolve => setTimeout(resolve, 800)); 
          setProgress(percentage);
        }

        
        const response = await Axios.post(server_base_url + "upload-image?userid=" + sess_user_id, formData);

        sessionStorage.setItem('uploadedImage', response.data.image_url);
        setIsUploading(false);
        setProgress(0);
      } catch (error) {
        console.error('Error creating object URL:', error);
      }
    }
  };

  useEffect(() => {
    const profile_image_url = sessionStorage.getItem('uploadedImage');
    setUploadedImage(profile_image_url);
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          display: 'inline-flex',
          width:"100%",
          margin:"10px"
        }}
      >
        {isUploading ? (
          <div style={{ filter: 'blur(2px)' }}> 
            <Avatar
              src={uploadedImage}
              alt="User Avatar"
              style={{
                cursor: 'pointer',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              sx={{ width: 100, height: 100 }}
            />
          </div>
        ) : (
          <label htmlFor="image-upload-input">
            <Avatar
              src={uploadedImage}
              alt="User Avatar"
              style={{
                cursor: 'pointer',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              sx={{ width: 100, height: 100 }}
            />
          </label>
        )}
        {isUploading && (
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress variant="determinate" value={progress} style={{width: 100, height: 100 }} />
            <Typography variant="caption" component="div" color="text.secondary">
              {`${Math.round(progress)}%`}
            </Typography>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload-input"
          onChange={handleFileUpload}
        />
      </div>
    <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <input
              type="text"
              value={userDetails.firstname}
              onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })}
            />
          </div>
          <div className="col">
            <div id="profile_email">{userDetails.email}</div>
          </div>
          <div className="col">
            <input
              type="text"
              value={userDetails.phnno}
              onChange={(e) => setUserDetails({ ...userDetails, phnno: e.target.value })}
            />
          </div>
          <div className="col">
            <button onClick={handleDetailsUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Profilepage.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Profilepage;
