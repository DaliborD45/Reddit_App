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

  useEffect(() => {
    dispatch(fetchComments(PostId));
  }, []);
  return (
    <div>
      {allComments.map(({ content, username, id }) => {
        return (
          <div key={id} className="w-full flex  pt-4 pl-6 py-5">
            <ShowImage
              className="overflow-hidden rounded-full transform scale-75"
              cloudName="dqhkvx2z5"
              publicId={userDataProfile}
            >
              <Transformation width="50" height="40" crop="scale" />
            </ShowImage>
            <section className="mt-1 ml-3">
              <label className="text-xs font-bold">{username}</label>
              <p className="pt-1 text-md font-semibold">{content}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsField;
