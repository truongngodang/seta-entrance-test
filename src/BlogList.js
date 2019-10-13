import React from 'react';
import './BlogList.css';
import {useSelector} from "react-redux";

function BlogList() {

  const blogs = useSelector(state => state.blogs);

  return (
    <ul className="container">
      {
        blogs.data.map(e => (
          <li key={e.id.toString()} className="item">
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default BlogList;
