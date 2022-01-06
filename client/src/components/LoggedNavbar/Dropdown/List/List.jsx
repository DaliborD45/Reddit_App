import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const List = ({ open }) => {
  const navigate = useNavigate();
  const allCommunities = useSelector((state) => state.allCommunities.value);
  const handleNavigation = (id) => {
    navigate(`/community/${id}`);
    window.location.reload();
  };
  return (
    open && (
      <ul
        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        {allCommunities.map(({ name, id }) => {
          return (
            <li
              className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-slate-100"
              id="listbox-option-0"
              onClick={() => handleNavigation(id)}
            >
              <div className="flex items-center">
                <span className="font-normal ml-3 block ">{name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default List;
