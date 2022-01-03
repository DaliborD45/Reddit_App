import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faUserCog,
  faPlusSquare,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { setUserLogout } from "../../../features/currentUser";
const Profile = ({ username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileLinks = [
    { id: 1, name: "Profile", icon: faUser },
    { id: 2, name: "User Settings", icon: faUserCog },
    { id: 3, name: " Create a Community", icon: faPlusSquare },
    { id: 4, name: "Sign out", icon: faSignOutAlt },
  ];
  const [isOpened, setToggleOpen] = useState(false);
  const handleUserLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/login");
  };
  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="   bg-white hover:bg-gray-100 border border-gray-400 text-black  font-medium rounded-lg text-sm px-12 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setToggleOpen(isOpened ? false : true)}
      >
        <FontAwesomeIcon icon={faRedditAlien} className="-ml-10" size="2x"/> <p className="pl-5 text-lg text-gray-600 ">{username}</p>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokelinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          !isOpened && "hidden"
        } bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-50 dark:bg-gray-700 absolute`}
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {profileLinks.map(({ id, name, icon }) => {
            return id === 4 ? (
              <li className="flex hover:bg-gray-100">
                <FontAwesomeIcon icon={icon} className="ml-2 mt-2" size="lg" />
                <a
                  href="#"
                  onClick={handleUserLogout}
                  className="text-sm  text-gray-700 block px-4 py-2 "
                >
                  {name}
                </a>
              </li>
            ) : (
              <li className="flex hover:bg-gray-100">
                <FontAwesomeIcon icon={icon} className="ml-2 mt-2" size="lg" />
                <a
                  href="#"
                  className={`text-sm  text-gray-700 block  py-2 ${
                    id === 2 ? "px-2" : "px-4"
                  }`}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Profile;
