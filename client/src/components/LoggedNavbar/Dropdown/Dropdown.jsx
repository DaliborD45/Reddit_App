import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import List from "./List/List";
const Dropdown = () => {
  const navigate = useNavigate();
  const allCommunities = useSelector((state) => state.allCommunities.value);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mt-2.5 relative" onClick={() => setOpen(open ? false : true)}>
        <button
          type="button"
          className="relative w-2/2 md:w-[250px] bg-white border-2 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-1.5 text-left cursor-default focus:outline-none  sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faHome}
              className="flex-shrink-0 h-6 w-6"
              size="lg"
            />
            <span className="ml-3 block truncate">Home</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <List open={open} />
      </div>
    </>
  );
};

export default Dropdown;

{
  /* <FontAwesomeIcon
  icon={faHome}
  className="absolute top-5 left-52"
  size="lg"
/>
<select
  className="hidden  lg:block mx-5 pl-10 mt-2.5   h-10  bg-white  border-2 border-gray-300 rounded-md"
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
</select> */
}
