import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image as ShowImage, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UpdateCommunityModal from "./UpdateCommunityModal/UpdateCommunityModal";
import { fetchCommunitiesByUserId } from "../../../features/communities";
const MyCommunities = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCommunityId, setSelectedCommunityId] = useState(0);
  const dispatch = useDispatch();
  const communities = useSelector(
    (state) => state.allCommunities.usersCommunities
  );
  const handleCommunityModalOpen = (communityId) => {
    setSelectedCommunityId(communityId);
    setModalOpen(true);
  };
  if (communities) {
    console.log(communities);
  }
  useEffect(() => {
    dispatch(fetchCommunitiesByUserId());
  }, []);

  return (
    communities && (
      <div className="w-[350px] mx-auto mt-10  border border-gray-400 rounded-sm">
        <div className=" mx-auto">
          <section className="h-[50px] w-full bg-orange-500">
            <h1 className="font-bold text-white text-lg pt-2.5 pl-2.5">
              Created Communities
            </h1>
          </section>
          <section className="h-[320px] bg-white w-full">
            <div className="flex flex-col max-w-11/12">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 overflow-scroll">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="pr-20 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                      

                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {communities.map((attribute) => (
                          <tr key={attribute.name}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  {attribute.profilePic ? (
                                    <ShowImage
                                      className="overflow-hidden rounded-full  mr-7"
                                      cloudName="dqhkvx2z5"
                                      publicId={attribute.profilePic}
                                    >
                                      <Transformation
                                        width="80"
                                        height="80"
                                        crop="scale"
                                      />
                                    </ShowImage>
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faUser}
                                      className="mr-5 mt-2"
                                      size="2x"
                                    />
                                  )}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {attribute.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                    

                            <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <p
                                onClick={() =>
                                  handleCommunityModalOpen(attribute.id)
                                }
                                className="text-indigo-600 hover:text-indigo-900 hover:underline"
                              >
                                Edit
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <UpdateCommunityModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          communityId={selectedCommunityId}
        />
      </div>
    )
  );
};

export default MyCommunities;
