import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const TryPremium = () => {
  return (
    <div className="w-80 bg-white h-32   mt-5 rounded-md border border-gray-400">
      <section className="flex">
        <section className="w-1/5 ">
          <FontAwesomeIcon icon={faCrown} size="2x" className="mt-5 ml-2.5" />
        </section>
        <section className="w-4/5 ">
          <h1 className="text-sm font-bold pt-3">Reddit Premium</h1>
          <p className="w-11/12 text-xs pt-1">
            The best Reddit experience, with monthly Coins
          </p>
        </section>
      </section>

      <button className="w-11/12 mt-3 ml-3.5 hover:bg-opacity-90  rounded-full bg-red-500 text-white font-bold h-7" onClick={()=>alert("here is my metamask addres so you can support me <3: 0xb1Dd9482d6f7FA76c0379B74bA82a4f602059961")}>
        Try Now
      </button>
    </div>
  );
};

export default TryPremium;
