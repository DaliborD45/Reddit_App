import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const navigate = useNavigate();
  const allCommunities = useSelector((state) => state.allCommunities.value);

  return (
    <>
      <FontAwesomeIcon
        icon={faHome}
        className="absolute top-4 left-52"
        size="lg"
      />
      <select
        className="hidden  lg:block mx-5 pl-10 mt-2   h-10  bg-white  border-2 border-gray-300 rounded-md"
        placeholder="select a community"
      >
        <option value="" className="" disabled selected>
          Home
        </option>
        {allCommunities.map(({ name, id }) => {
          return (
            <option
              onClick={() => navigate(`community/${id}`)}
              value={id}
              className="text-sm"
            >{`r/${name}`}</option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
