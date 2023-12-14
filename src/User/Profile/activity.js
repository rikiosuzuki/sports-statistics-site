import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import * as client from "./client";
import { BsTrash3Fill, BsPencilFill} from "react-icons/bs";

function Activity() {
  // a setPost has an empty title, empty description, and the current user's username
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const addNewPost = async () => {
    console.log("Adding a new post");
    console.log("Sending Post: " + post);
    try {
      const newPost = await client.createPost(post);
      setPosts([newPost, ...posts]);
    } catch (err) {
      console.log(err);
    }
  };

  const updatePost = () => {
    //update a post
    console.log("Updating the post");
    setPosts(
      posts.map((p) => {
        if (p._id === post._id) {
          return post;
        } else {
          return p;
        }
      })
    );
  };

  const deletePost = (postId) => {
    //delete a post
    console.log("Deleting the post");
    setPosts(posts.filter((post) => post._id !== postId));

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
            onClick={updatePost}
          >
            Update
          </button>
          
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item content-colored">
          {console.log(posts)}
          {posts.map(
            (post) => (
              (
                <div key={post._id}>
                  <label>Title: {post.title}</label>
                  <label>Description: {post.description}</label>

                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setPost(post);
                    }}
                  >
                    <BsPencilFill />
                    Edit
                  </button>


           
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(post)}
                  >
                    <BsTrash3Fill />
                    Delete
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
