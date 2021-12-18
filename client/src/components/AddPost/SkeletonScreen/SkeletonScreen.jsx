import React from "react";

const ProcessingBtn = () => {
  return (
    <>
      <div className="mt-10 border  bg-white border-blue-300 shadow rounded-md p-3 max-w-xs  w-full mr-auto mb-6">
        <div className=" bg-gray-300 rounded h-4"></div>
      </div>

      <div className="border  bg-white border-blue-300 shadow rounded-md p-4 max-w-3xl h-72 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          {/* <div className="rounded-full bg-gray-300 h-10 w-10"></div> */}
          <div className="flex-1 space-y-6 py-1">
            <div className=" bg-gray-300 rounded h-16"></div>
            <div className="space-y-3">
              {/* <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-300 rounded col-span-2"></div>
              <div className="h-2 bg-gray-300 rounded col-span-1"></div>
            </div> */}
              <div className=" bg-gray-300 rounded h-28"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessingBtn;
