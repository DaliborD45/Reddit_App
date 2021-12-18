import React, { useState } from "react";

const NameInput = ({ setCommunityName, errorMessage }) => {
  const [letterCount, setLetterCount] = useState(21);

  const handleLetterCount = (e) => {
    setCommunityName(e.target.value);
    setLetterCount(21 - e.target.value.length);
  };
  return (
    <div className="mb-6">
      <label className="text-lg font-medium text-gray-900 block  dark:text-gray-300">
        Name
      </label>
      <span className="text-xs text-gray-500 ">
        Community names including capitalization cannot be changed.
      </span>
      <p className="absolute mt-8 ml-3 text-gray-400">r/</p>
      <input
        type="text"
        as="input"
        onChange={(e) => handleLetterCount(e)}
        maxLength="21"
        className={`shadow-sm mt-6 pl-7 text-sm border border-gray-200 text-gray-900  rounded-lg focus:ring-black focus:border-black block w-full p-2.5 ${
          errorMessage && "border border-red-500"
        }`}
        required
      />
      <p
        className={`text-xs pt-2  ${
          letterCount === 0 ? "text-red-500" : "text-gray-500"
        }`}
      >{`${letterCount} Characters remaining`}</p>
      {errorMessage && (
        <p className="text-red-500 text-xs pt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default NameInput;
