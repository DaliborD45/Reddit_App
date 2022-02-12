import React from "react";
import { list, list2 } from "./Lists";
const About = () => {
  return (
    <div className="bg-white w-12/12 h-64 rounded-sm  mt-8 mx-auto border border-gray-500">
      <section className="flex">
        <section className="ml-5 mt-3">
          <ul className="focus">
            {list.map((link) => {
              return <p className="focus:border-b hover:underline hover:text-gray-600 text-sm pb-1">{link}</p>;
            })}
          </ul>
        </section>

        <section className="ml-14 mt-3">
          <ul>
            {list2.map((link) => {
              return <p className="focus:border-b hover:underline hover:text-gray-600 text-sm">{link}</p>;
            })}
          </ul>
        </section>
      </section>

      <p className="ml-5 text-xs pt-5">
        Scam Inc © 2021 . All rights reserved
      </p>
    </div>
  );
};

export default About;
