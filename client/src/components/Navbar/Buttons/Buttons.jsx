import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <section className="">
      <button
        className="w-24  md:w-32 py-2 font-bold rounded-full mt-2 border border-blue-500 text-blue-500 hover:bg-blue-100"
        onClick={() => navigate("/login")}
      >
        Log in
      </button>
      <button
        className="bg-blue-500 w-24 mr-7 md:w-32 py-2 font-bold rounded-full mt-2 border border-blue-500 text-white ml-7 hover:bg-blue-600"
        onClick={() => navigate("/registration")}
      >
        Sign Up
      </button>
    </section>
  );
};

export default Buttons;
