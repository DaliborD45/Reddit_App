import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
const CommunityInfo = () => {
  return (
    <div className="w-10/12 mx-auto mt-10 h-2/4 border border-gray-400 rounded-sm">
      <section className="h-[50px] w-full bg-blue-600">
        <h1 className="font-bold text-white pt-2.5 pl-2.5">About Community</h1>
      </section>
      <section className="h-[377px] bg-white">
        <section className="w-5/5 pt-2 pl-2 flex  ">
          <div className="bg-teal-300  rounded-full w-14 h-14"></div>
          <p className="font-bold pl-3 pt-3 text-lg">r/idksomecommunity</p>
        </section>
        <section className="w-11/12 mx-auto">
          <p className="text-sm font-semibold pt-3">
            History memes and jokes go here. Our Discord Server can be found in
            the sidebar below.
          </p>
        </section>
        <section className="w-full flex justify-between ml-3 font-bold mt-3">
          <section>
            <p>3.3M</p>
            <p className="font-normal text-sm">History Experts</p>
          </section>
          <section className="pr-7">
            <p>4.7k</p>
            <p className="font-normal text-sm">Researching History</p>
          </section>
        </section>
        <section className="flex pl-3 font-light text mt-3">
          <FontAwesomeIcon icon={faBirthdayCake} className="" size="lg" />

          <p className="pl-2">Created Sep 17, 2012</p>
        </section>
        <section className="w-full">
          <button className="w-[292px] mt-5 ml-3  rounded-full bg-blue-800 text-white font-bold h-7 hover:opacity-90">
            Create a Post
          </button>
        </section>
      </section>
    </div>
  );
};

export default CommunityInfo;
