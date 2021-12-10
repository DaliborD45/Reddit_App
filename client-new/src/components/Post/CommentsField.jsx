import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllComments } from "../../features/allComments";
import axios from "axios";
const CommentsField = ({ PostId }) => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.allComments.value);
  if (allComments) {
    console.log(allComments);
  }
  useEffect(() => {
    const getAllComments = async () => {
      const fetchAllComments = await axios.get(
        `http://localhost:3001/comments/byId/${PostId}`
      );
      dispatch(setAllComments(fetchAllComments.data));
    };
    getAllComments();
  }, []);
  return (
    <div>
      {allComments.map(({ content, username, id }) => {
        return (
          <div key={id} className="w-full flex  pt-4 pl-6 py-5">
            <span class="rounded-full h-6 w-6 flex items-center justify-center bg-pink-400 mt-1 mr-2" />
            <section className="mt-1">
              <label className="text-xs">{username}</label>
              <p className="pt-1 text-md">{content}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsField;