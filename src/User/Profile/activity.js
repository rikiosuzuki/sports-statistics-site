import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import * as client from "./client";
import { BsTrash3Fill } from "react-icons/bs";

function Activity() {
  // a setPost has an empty title, empty description, and the current user's username
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const addNewPost = async () => {
    console.log("Adding a new course");
    console.log(post);
    try {
      const newPost = await client.createPost(post);
      setPosts([newPost, ...posts]);
    } catch (err) {
      console.error(err);
    }
  };

  const updatedPost = () => {
    //update a post
    console.log("Updating the course");
  };

  const deletePost = () => {
    //delete a post
    console.log("Deleting the course");
  };

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
    <div>
      <h1>Activity page</h1>
      <div className="row centered-boxed-content">
        <div className="col-11">
          <label>Create New Post</label>
          <div>
            <label>Title: </label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div>
            <label>Description: </label>
            <input
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-1">
          <button
            className="btn btn-success button-margin "
            onClick={addNewPost}
          >
            Add
          </button>
          <button
            className="btn btn-primary button-margin "
            onClick={updatedPost}
          >
            Update
          </button>
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item content-colored ">
          <div>
            <label>Title: </label>
          </div>
          <div>
            <label>Description: </label>
          </div>
          <button className="btn btn-danger" onClick={() => deletePost(post)}>
            <BsTrash3Fill />
          </button>
        </div>
        <div className="list-group-item centered-boxed-content">
          {console.log(posts)}
          {posts.map(
            (post) => (
              console.log(post),
              (
                <div key={post._id}>
                  <label>Title: {post.title}</label>
                  <label>Description: {post.description}</label>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(post)}
                  >
                    <BsTrash3Fill />
                  </button>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default Activity;
