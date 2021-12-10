import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import AddPost from "./components/AddPost/AddPost";
import Post from "./components/Post/Post";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Homepage />} />
        <Route path="/post/:id" exact element={<Post />} />
        <Route path="/addPost" exact element={<AddPost />} />
      </Routes>
    </div>
  );
};

export default App;

// extend: {
//   backgroundImage: {
//     "clouds-img":
//       "url('https://www.macmillandictionaryblog.com/wp-content/uploads/2018/04/cloud--810x528.jpg')",
//   },
// },