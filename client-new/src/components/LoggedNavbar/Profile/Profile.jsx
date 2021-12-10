import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogout } from "../../../features/currentUser";
const Profile = ({ username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        className="text-white bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setToggleOpen(isOpened ? false : true)}
      >
        <p className="">{username}</p>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          !isOpened && "hidden"
        } bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute`}
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li onClick={handleUserLogout}>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
