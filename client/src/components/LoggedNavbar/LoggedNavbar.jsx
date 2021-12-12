import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBell,
  faImages,
  faMoneyBillAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus, faHome, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserStatus, setCurrentUser } from "../../features/currentUser";
import Profile from "./Profile/Profile";
const LoggedNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedStatus = useSelector((state) => state.currentUser.value.status);
  const [communities, setCommunities] = useState([]);
  const [userdata, setuserdata] = useState({});
  const UserData = useSelector((state) => state.currentUser.value);
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
        setuserdata(data.data);
        dispatch(setUserStatus());
      } catch (error) {
        console.log(error);
      }
    };
    getUsersData();
  }, [isLoggedStatus]);
  const handleReloadPage = () => {
    navigate("/");
    window.location.reload();
  };
  const handleAddPost = () => {
    navigate("/addPost");
  };
  useEffect(() => {
    const getCommunities = async () => {
      const data = await axios.get("http://localhost:3001/community");
      setCommunities(data.data);
    };
    getCommunities();
  }, []);
  return (
    isLoggedStatus && (
      <div className="w-screen h-14 bg-gray-50 flex fixed">
        <section className="-mt-2 ml-5" onClick={handleReloadPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            width="160"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.4142"
            viewBox="-39.158565 -22.4785 339.37423 134.871"
          >
            <g transform="translate(-14.043 -10.043)">
              <circle r="5.687" cy="40.998" cx="249.773" fill="#ff4500" />
              <path
                d="M168.549 65.247c2.79 0 4.399-2.092 4.292-4.131-.053-1.073-.161-1.771-.268-2.307-1.717-7.403-7.725-12.876-14.861-12.876-8.476 0-15.343 7.672-15.343 17.114s6.867 17.114 15.343 17.114c5.312 0 9.121-1.931 11.857-4.989 1.341-1.502 1.073-3.809-.537-4.936-1.341-.912-3.004-.59-4.238.429-1.18 1.02-3.433 3.058-7.082 3.058-4.291 0-7.939-3.702-8.744-8.584h19.581zm-10.89-12.822c3.862 0 7.189 3.004 8.423 7.135h-16.846c1.234-4.184 4.56-7.135 8.423-7.135zm-14.968-3.112c0-1.609-1.18-2.897-2.682-3.165-4.668-.697-9.067 1.019-11.588 4.185v-.43c0-1.985-1.61-3.218-3.219-3.218-1.771 0-3.219 1.448-3.219 3.218v26.288c0 1.717 1.287 3.219 3.004 3.326 1.878.107 3.434-1.341 3.434-3.219V62.725c0-6.008 4.506-10.944 10.729-10.246h.644c1.609-.108 2.897-1.503 2.897-3.166zm110.3 3.434c0-1.771-1.448-3.219-3.218-3.219-1.771 0-3.219 1.448-3.219 3.219v23.551c0 1.771 1.448 3.219 3.219 3.219 1.77 0 3.218-1.448 3.218-3.219V52.747zm-47.854-17.811c0-1.771-1.448-3.219-3.219-3.219-1.77 0-3.218 1.448-3.218 3.219V49.26c-2.2-2.2-4.936-3.273-8.209-3.273-8.476 0-15.343 7.672-15.343 17.114s6.867 17.114 15.343 17.114c3.273 0 6.063-1.127 8.262-3.327.268 1.503 1.61 2.629 3.165 2.629 1.771 0 3.219-1.448 3.219-3.219zM190.545 73.83c-4.936 0-8.906-4.774-8.906-10.729 0-5.901 3.97-10.73 8.906-10.73s8.906 4.775 8.906 10.73-4.024 10.729-8.906 10.729zm48.176-38.894c0-1.771-1.448-3.219-3.219-3.219-1.77 0-3.219 1.448-3.219 3.219V49.26c-2.199-2.2-4.935-3.273-8.208-3.273-8.476 0-15.343 7.672-15.343 17.114s6.867 17.114 15.343 17.114c3.273 0 6.062-1.127 8.262-3.327.268 1.503 1.609 2.629 3.165 2.629 1.771 0 3.219-1.448 3.219-3.219zM224.075 73.83c-4.936 0-8.905-4.774-8.905-10.729 0-5.901 3.969-10.73 8.905-10.73s8.906 4.775 8.906 10.73-3.97 10.729-8.906 10.729zm45.225 2.522V52.425h2.844c1.502 0 2.843-1.127 2.95-2.683.108-1.663-1.233-3.057-2.843-3.057H269.3v-4.507c0-1.717-1.287-3.219-3.004-3.326-1.878-.107-3.433 1.341-3.433 3.219v4.667h-2.683c-1.502 0-2.843 1.127-2.95 2.683-.108 1.663 1.234 3.058 2.843 3.058h2.736v23.927c0 1.77 1.449 3.218 3.219 3.218 1.878-.107 3.272-1.502 3.272-3.272z"
                fill="#222"
                fillRule="nonzero"
              />
            </g>
            <g transform="translate(-14.043 -10.043)">
              <circle r="44.957" cy="55" cx="59" fill="#ff4500" />
              <path
                d="M88.989 55c0-3.648-2.95-6.545-6.545-6.545-1.77 0-3.38.697-4.56 1.824-4.506-3.219-10.676-5.311-17.543-5.579l3.004-14.056 9.764 2.092c.108 2.468 2.146 4.453 4.668 4.453 2.575 0 4.667-2.092 4.667-4.668 0-2.575-2.092-4.667-4.667-4.667-1.824 0-3.434 1.073-4.185 2.629l-10.89-2.307c-.322-.054-.644 0-.859.161-.268.161-.429.429-.482.751l-3.327 15.665c-6.974.215-13.251 2.307-17.811 5.58a6.5883 6.5883 0 00-4.56-1.824c-3.648 0-6.545 2.95-6.545 6.545 0 2.682 1.609 4.935 3.863 5.955-.108.643-.161 1.287-.161 1.985 0 10.085 11.749 18.294 26.234 18.294 14.485 0 26.234-8.155 26.234-18.294 0-.644-.054-1.342-.161-1.985 2.253-1.02 3.862-3.327 3.862-6.009zm-44.957 4.667c0-2.575 2.092-4.667 4.668-4.667 2.575 0 4.667 2.092 4.667 4.667 0 2.575-2.092 4.668-4.667 4.668-2.576.053-4.668-2.093-4.668-4.668zM70.159 72.06c-3.219 3.219-9.335 3.434-11.105 3.434-1.824 0-7.94-.269-11.106-3.434-.482-.483-.482-1.234 0-1.717.483-.482 1.234-.482 1.717 0 2.039 2.039 6.331 2.736 9.389 2.736 3.058 0 7.403-.697 9.388-2.736.483-.482 1.234-.482 1.717 0 .429.483.429 1.234 0 1.717zm-.859-7.672c-2.575 0-4.667-2.092-4.667-4.667 0-2.575 2.092-4.667 4.667-4.667 2.576 0 4.668 2.092 4.668 4.667 0 2.521-2.092 4.667-4.668 4.667z"
                fill="#fff"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </section>
        <section className="ml-1   w-80 rounded-sm  text-gray-400 bg-white  mt-3">
          <FontAwesomeIcon icon={faHome} />

          <select
            as="select"
            className="ml-3 w-64 focus:border-none focus:outline-none h-8"
            name="preffered_posts"
          >
            <option defaultValue hidden="hidden">
              Home
            </option>
            {communities.map(({ name, id }) => {
              return <option value={id}>{`r/${name}`}</option>;
            })}
            <option value="Sport">r/dunkmemes</option>

            <option value="Memes">r/HistoryHomies</option>
          </select>
        </section>
        <section className=" relative  text-gray-600 w-2/5 ml-3 my-auto">
          <input
            className="w-full border-2 mt-2 border-gray-300 bg-white h-10  rounded-lg text-sm focus:outline-none pl-5"
            type="search"
            name="search"
            placeholder="Search Reddit"
          />
          <button
            type="submit"
            className="absolute right-4 top-0 mt-4 text-right"
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
            </svg>
          </button>
        </section>
        <section className="my-auto ml-5 ">
          <FontAwesomeIcon className="mx-3" icon={faFireAlt} size="lg" />
          <FontAwesomeIcon className="mx-3" icon={faImages} size="lg" />
          <FontAwesomeIcon className="mx-3" icon={faCommentDots} size="lg" />
          <FontAwesomeIcon className="mx-3" icon={faBell} size="lg" />
          <FontAwesomeIcon
            className="mx-3"
            icon={faPlus}
            onClick={handleAddPost}
            size="lg"
          />
        </section>
        <section className="my-auto ml-2">
          <div className="w-20 bg-yellow-300 h-10 rounded-full flex hover:opacity-90">
            <FontAwesomeIcon icon={faMoneyBillAlt} className="mt-3 ml-2" size="md"/>
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
