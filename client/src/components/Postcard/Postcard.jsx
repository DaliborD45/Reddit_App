import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp as arrowUpRegular,
  faArrowAltCircleDown as arrowDownRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleUp as arrowUpSolid,
  faArrowAltCircleDown as arrowDownSolid,
} from "@fortawesome/free-solid-svg-icons";
import useDidMountEffect from "../../Hooks/useDidMountEffext";
import { setUpvote, setDownvote } from "../../features/votes";
import { useSelector, useDispatch } from "react-redux";
const Postcard = ({ title, text, id, postLikes }) => {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(0);
  const upvotes = useSelector((state) => state.votes.Upvoted);
  const downvotes = useSelector((state) => state.votes.Downvoted);
  if (!upvotes) {
    console.log(upvotes);
  }
  useEffect(() => {
    postLikes.map(({ value }) =>
      setVotes((prevState) => prevState + parseInt(value))
    );
  }, []);
  const navigate = useNavigate();
  const handleVote = async (type) => {
    try {
      const res = await axios.put(
        "http://localhost:3001/likes",
        { postId: id, type },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      if (res.status === 200 && type === "Upvote") {
        setVotes((prevState) => prevState + parseInt(res.data));
        dispatch(setUpvote(true));
        dispatch(setDownvote(false));
      }
      if (res.status === 200 && type === "Downvote") {
        setVotes((prevState) => prevState + parseInt(res.data));
        dispatch(setUpvote(false));
        dispatch(setDownvote(true));
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-9/12 flex  mt-9  rounded-sm max-h-96 overflow-hidden">
      <section className="w-1/12 bg-gray-200 flex flex-col">
        <FontAwesomeIcon
          icon={upvotes ? arrowUpSolid : arrowUpRegular}
          size="2x"
          className="my-1 mx-auto"
          onClick={() => handleVote("Upvote")}
        />

        <p className="mx-auto font-bold text-lg">{votes}</p>
        <FontAwesomeIcon
          icon={downvotes ? arrowDownSolid : arrowDownRegular}
          size="2x"
          className="my-1 mx-auto"
          onClick={() => handleVote("Downvote")}
        />
      </section>
      <section
        className="w-11/12 bg-gray-100"
        onClick={() => navigate(`/post/${id}`)}
      >
        <section className="w-11/12 ml-4 mt-2">
          <p className="text-md font-bold text-xl">{title}</p>
          <p className=" mt-3">{text}</p>
        </section>
      </section>
    </div>
  );
};

export default Postcard;
