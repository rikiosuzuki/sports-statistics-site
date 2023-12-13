import React from "react";
import axios from "axios";
import "./index.css";
import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Activity() {
// a setPost has an empty title, empty description, and the current user's username

  const [postInfo, setPost] = useState({ title: "", description: "", author: client.getUser().username });
  const navigate = useNavigate();
  // const signin = async () => {
  //   await client.signin(credentials);
  //   navigate("/project/account");
  // };

  const addNewPost = () => {
    // Logic for adding a new course
    console.log("Adding a new course");
  };

  const updatedPost = () => {
    // Logic for updating a course
    console.log("Updating the course");
  };

  return (
    <div>
      <h1>Activity page</h1>
      <div className="row centered-boxed-content">
        <div className="col-11">
          <h5>Create New Post</h5>
          

          <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
          <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>




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
      {/* <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />

          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />

          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />

          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          /> */}
    </div>
  );
}
export default Activity;
