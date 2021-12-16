import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import AddPost from "./components/AddPost/AddPost";
import Post from "./components/Post/Post";
import Community from "./components/Community/Community";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Homepage />} />
        <Route path="/post/:id" exact element={<Post />} />
        <Route path="/community/:id" exact element={<Community />} />
        <Route path="/addPost" exact element={<AddPost />} />
      </Routes>
    </div>
  );
};

export default App;
