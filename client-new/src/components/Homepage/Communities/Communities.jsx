import React, { useEffect, useState } from "react";

import axios from "axios";
const Communities = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCommunities = async () => {
      try {
        const allComms = await axios.get("http://localhost:3001/community");
        setData(allComms.data);
        console.log(allComms);
      } catch (error) {
        console.error(error);
      }
    };
    getCommunities();
  }, []);
  return (
    <div className="bg-white w-80 h-96 rounded-lg  mt-8 r -ml-40 ">
      <section className="h-1/5 border bg-clouds-img">
        <p className="ml-5 pt-10 font-bold text-xl text-white text-shadow">
          Communities near you
        </p>
      </section>
      <section className="w-full h-4/5 border ">
        <section className="mt-2 ">
          {data.map(({ name, id }) => {
            return (
              <div className="w-full border-b border-gray-200 last:border-0">
                <div className="flex  w-10/12 text-md  mx-auto py-2 font-semibold">
                  <label>{id}</label>
                  <p className="ml-5">{name}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className=" w-11/12 mx-auto mt-5">
          <button className="bg-blue-500 rounded-md text-white font-bold py-1 w-full ">
            View All
          </button>
        </section>
      </section>
    </div>
  );
};

export default Communities;
