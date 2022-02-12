import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useOutsideAlerter } from "../../../../hooks/useOutsideAlerter";
import { useNavigate } from "react-router-dom";
import { fetchCommunities } from "../../../../features/communities";
const List = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCommunities());
  }, []);
  const allCommunities = useSelector((state) => state.allCommunities.value);
  const handleNavigation = (id) => {
    navigate(`/community/${id}`);
    window.location.reload();
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    open && (
      <ul
        className="absolute z-10 mt-10 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        tabIndex="-1"
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
              key={id}
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
