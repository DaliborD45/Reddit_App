import React, { useState, useEffect } from "react";
import axios from "axios";

import Dropdown from "./Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setUserStatus, setCurrentUser } from "../../features/currentUser";
import Profile from "./Profile/Profile";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import Icons from "./Icons/Icons";
import Free from "./Free/Free";
const LoggedNavbar = () => {
  const dispatch = useDispatch();
  const isLoggedStatus = useSelector((state) => state.currentUser.value.status);
  const [userdata, setUserData] = useState({});
  if (isLoggedStatus !== undefined) {
    console.log(isLoggedStatus);
  }

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const data = await axios.get(
          "http://localhost:3001/users/getUserData",
          {
            headers: {
              authToken: localStorage.getItem("accessToken"),
            },
          }
        );
        dispatch(setCurrentUser(data.data));
        setUserData(data.data);
        dispatch(setUserStatus());
      } catch (error) {
        console.log(error);
      }
    };
    getUsersData();
  }, [isLoggedStatus]);

  return (
    isLoggedStatus && (
      <div className="w-screen h-14 bg-gray-50 flex fixed">
        <Logo />
        <Dropdown />
        <SearchBar />
        <Icons />
        <Free />

        <section className="ml-2 my-auto">
          <Profile username={userdata.name} />
        </section>
      </div>
    )
  );
};

export default LoggedNavbar;
