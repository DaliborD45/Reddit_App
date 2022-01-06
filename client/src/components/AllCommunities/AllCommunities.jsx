import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const AllCommunities = () => {
  const navigate = useNavigate();
  const allCommunities = useSelector((state) => state.allCommunities.value);
  if (allCommunities) {
    console.log(allCommunities);
  }
  let listId = 0;
  return (
    allCommunities && (
      <>
        <Navbar />
        <LoggedNavbar />
        <div className="w-screen min-h-screen bg-gray-300 ">
          <h1 className="font-bold text-3xl text-orange-500 text-center pt-24 ">
            All Communities
          </h1>

          <div className="flex flex-col w-full md:w-[900px] shrink-0 mx-auto pt-10">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        ></th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Created At
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Adult Content
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allCommunities.map((attributes) => {
                        listId += 1;
                        return (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 pl-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {listId}
                            </td>
                            <td
                              onClick={() =>
                                navigate(`/community/${attributes.id}`)
                              }
                              className="py-4 pl-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white hover:text-orange-600"
                            >
                              {attributes.name}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {attributes.type}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {attributes.createdAt.slice(0, 10)}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {attributes.adultContent === 1 ? "Yes" : "No"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default AllCommunities;
/* <div className="w-screen min-h-screen bg-gray-300 ">
          <div className="w-1/2 bg-gray-100 border border-gray-400 rounded-md mt-10  min-h-20 mx-auto">
            <section className="w-full h-10 bg-gray-200 rounded-t-md">
              <p className="font-semibold pl-5 pt-1.5 text-lg "></p>
            </section>
            <section className="w-full">
              <ol>
                {allCommunities.map((attribute) => {
                  listId += 1;
                  return (
                    <li
                      className="pl-4  py-2 border-b-2 border-gray-400"
                      key={attribute.id}
                    >
                      <b>{`${listId}`}</b>
                      {` ${attribute.name}`}
                    </li>
                  );
                })}
              </ol>
            </section>
          </div>
        </div> */
