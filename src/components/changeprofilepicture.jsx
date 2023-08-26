import React, { useState } from 'react';
import Axios from 'axios';

function ChangeProfilePicture({ userId }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profilePicture', file);

    try {
      await Axios.post(`/api/upload-profile-picture/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success and update UI
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ChangeProfilePicture;
