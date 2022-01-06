import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../LoggedNavbar/SearchBar/SearchBar";
import Logo from "../LoggedNavbar/Logo/Logo";
import Buttons from "./Buttons/Buttons";
const Navbar = () => {
  const isLoggedStatus = useSelector((state) => state.currentUser.value.status);

  return (
    !isLoggedStatus && (
      <div className="w-screen h-14 bg-gray-200 flex justify-between fixed">
        <Logo />
        <SearchBar />
        <Buttons />
      </div>
    )
  );
};

export default Navbar;
