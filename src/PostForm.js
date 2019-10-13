import React from 'react';
import './PostForm.css';

function PostForm() {


  return (
    <div className="container">
      <input type="text" placeholder="Title" className="inputTitle"/>
      <textarea name="body" id="body" cols="30" rows="10" className="inputBody"></textarea>
      <button>POST</button>
    </div>
  );
}

export default PostForm;
