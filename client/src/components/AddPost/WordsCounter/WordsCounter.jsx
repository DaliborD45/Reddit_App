import React from "react";

const WordsCounter = ({count}) => {
  return <p className="font-bold text-xs relative  pt-6 pr-2 border border-gray-500 hover:border-2 border-l-0">{count}/300</p>;
};

export default WordsCounter;
