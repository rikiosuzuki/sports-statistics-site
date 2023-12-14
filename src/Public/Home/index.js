import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as client from "./client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./welcome";
import Teams from "./teams";
import Players from "./players";
// import "./index.css";
// import * as client from "./client";
function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const fetchPost = async () => {
    try {
      const posts = await client.findAllPosts();
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="row">

      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="Welcome" />} />
          <Route path="Welcome" element={<Welcome />} />
          <Route path="Teams" element={<Teams />} />
          <Route path="Players" element={<Players />} />
        </Routes>
      </div>




      <div className="col-2">
        <div className="list-group">
          <div className="list-group-item content-colored">
            {console.log(posts)}
            {posts.map((post) => (
              <div key={post._id}>
                <label>Title: {post.title}</label>
                <label>Description: {post.description}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
