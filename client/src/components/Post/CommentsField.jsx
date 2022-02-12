import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image as ShowImage, Transformation } from "cloudinary-react";

import { fetchComments } from "../../features/allComments";
const CommentsField = ({ PostId }) => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.allComments.value);
  const userDataProfile = useSelector(
    (state) => state.currentUser.value.profilePic
  );
  console.log(allComments);

  useEffect(() => {
    dispatch(fetchComments(PostId));
  }, []);
  return (
    <div>
      {allComments.map(({ content, authorName, id }) => {
        return (
          <div key={id} className="w-full   pt-4 pl-6 py-5">
            <section className="flex">
              <ShowImage
                className="overflow-hidden rounded-full transform scale-75"
                cloudName="dqhkvx2z5"
                publicId={userDataProfile}
              >
                <Transformation width="54" height="50" crop="scale" />
              </ShowImage>
              <section className="block"></section>
              <section className="mt-1 ml-3">
                <label className="text-xs font-bold">u/{authorName}</label>
                <p className="pt-0.5 text-md font-semibold">{content}</p>
              </section>
            </section>
            <section className="flex text-xs text-gray-500 ml-14 mt-1 hover:text-gray-400 hover:cursor-pointer">
              <p className="px-3">Reply</p>
              <p className="px-3">Share</p>
              <p className="px-3">Report</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsField;
