import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import Dropdown from "./Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { setUserStatus, setCurrentUser } from "../../features/currentUser";
import Profile from "./Profile/Profile";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import Icons from "./Icons/Icons";
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
        <section className="my-auto ml-2">
          <div className="w-20 bg-yellow-300 h-10 rounded-full flex hover:opacity-90">
            <FontAwesomeIcon icon={faMoneyBillAlt} className="mt-3 ml-2" />
            <p className="pt-1.5 pl-1 ">Free</p>
          </div>
        </section>

        <section className="ml-2 my-auto">
          <Profile username={userdata.name} />
        </section>
      </div>
    )
  );
};

export default LoggedNavbar;
