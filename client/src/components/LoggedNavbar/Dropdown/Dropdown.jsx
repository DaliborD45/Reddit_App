import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import List from "./List/List";
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="max-w-[100px] lg:max-w-[150px] xl:max-w-[250px] shrink-1 w-full relative border-2 rounded-md border-gray-300 h-10 my-auto text-gray-600 "
        onClick={() => setOpen(open ? false : true)}
      >
        <span className="absolute inset-y-0 left-0 top-2 flex items-cemter pl-4">
          <FontAwesomeIcon
            icon={faHome}
            className="h-6 w-6 fill-current"
            size="lg"
          />
        </span>
        <span className="hidden lg:flex absolute inset-y-0 left-12 xl:left-14 top-1 font-bold text-lg xl:text-xl">
          Home
        </span>
        <span className="absolute inset-y-0 right-5 top-2 flex items-cemter pl-4">
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            className="h-6 w-6 fill-current"
            size="lg"
          />
        </span>
        <List open={open} />
      </div>
    </>
  );
};

export default Dropdown;
