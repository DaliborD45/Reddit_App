import React from "react";

const About = () => {
  const list = [
    "Help",
    "Reddit Coins",
    "Reddit Premium",
    "Reddit Gifts",
    "Communities",
    "Rereddit",
    "Topics",
  ];
  const list2 = [
    "About",
    "Careers",
    "Press",
    "Advertise",
    "Blog",
    "Terms",
    "Content Policy",
    "Privacy Policy",
    "Mod Policy",
  ];
  return (
    <div className="bg-white w-80 h-64 rounded-sm  mt-8 r -ml-40  ">
      <section className="flex">
        <section className="ml-5 mt-3">
          <ul className="focus">
            {list.map((link) => {
              return <p className="focus:border-b text-sm pb-1">{link}</p>;
            })}
          </ul>
        </section>

        <section className="ml-14 mt-3">
          <ul>
            {list2.map((link) => {
              return <p className="focus:border-b text-sm">{link}</p>;
            })}
          </ul>
        </section>
      </section>

      <p className="ml-5 text-xs pt-5">Reddit Inc © 2021 . All rights reserved</p>
    </div>
  );
};

export default About;
