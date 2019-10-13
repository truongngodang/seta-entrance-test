import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getBlog} from "./redux/actions/getBlog";
import BlogList from "./BlogList";
import PostForm from "./PostForm";

function App() {

  const dispatch = useDispatch();

  const _fetchPosts = async () => {
    try {
      const res = await dispatch(getBlog());
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _fetchPosts();
  }, []);

  return (
    <div className="container">
      <PostForm />
      <BlogList />
    </div>
  );
}

export default App;
