import React from "react";

const Done = () => {
  return (
    <div className=" max-w-sm mx-auto pb-20 mt-10">
      <div className="svg-container max-w-xs  mx-auto pl-10">
        <svg
          className="ft-green-tick ml-14"
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            className="tick"
            fill="none"
            stroke="#FFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
        <p>You will be logged out in a second</p>
      </div>
    </div>
  );
};

export default Done;
