import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Dropdown = () => {
  const [communities, setCommunities] = useState([]);
  const allCommunities = useSelector((state) => state.allCommunities.value);

  useEffect(() => {
    const getCommunities = async () => {
      const data = await axios.get("http://localhost:3001/community");
      setCommunities(data.data);
    };
    getCommunities();
  }, []);
  return (
    <>
      <FontAwesomeIcon
        icon={faHome}
        className="absolute top-6 left-52"
        size="lg"
      />
      <select
        className="w-72 mx-5 pl-10 mt-3  -pt-3  h-10  bg-white  border-2 border-gray-300 rounded-md"
        placeholder="select a community"
      >
        <option value="" className="" disabled selected>
          Home
        </option>
        {allCommunities.map(({ name, id }) => {
          return <option value={id} className="text-sm">{`r/${name}`}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
