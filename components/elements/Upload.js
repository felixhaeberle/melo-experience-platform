import React, { Component } from 'react'
import axios from 'axios'

export default function Upload(){
  // Perform the upload
  const uploadAudio = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };

  return (
    <div className="Upload">
      <center>
        <h1>UPLOAD A FILE</h1>
        <input onChange={uploadAudio} type="file" accept="audio/mpeg"/>
      </center>
    </div>
  );
}
