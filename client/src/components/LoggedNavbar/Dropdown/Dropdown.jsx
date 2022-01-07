import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import List from "./List/List";
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="max-w-[250px] w-full relative border-2 rounded-md border-gray-300 h-10 my-auto text-gray-600 focus-within:text-orange-500"
        onClick={() => setOpen(open ? false : true)}
      >
        <span className="absolute inset-y-0 left-0 top-2 flex items-cemter pl-4">
          <FontAwesomeIcon
            icon={faHome}
            className="h-6 w-6 fill-current"
            size="lg"
          />
        </span>
        <span className="absolute inset-y-0 left-14 top-1 font-bold text-xl">
          Home
        </span>
        <span className="absolute inset-y-0 right-5 top-2 flex items-cemter pl-4">
          <svg
            className="h-6 w-6 fill-current"
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
        <List open={open} />
      </div>
    </>
  );
};

export default Dropdown;
