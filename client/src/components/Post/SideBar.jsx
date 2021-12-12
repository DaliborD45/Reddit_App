import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp as arrowUpRegular,
  faArrowAltCircleDown as arrowDownRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleUp as arrowUpSolid,
  faArrowAltCircleDown as arrowDownSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setUpvote, setDownvote } from "../../features/votes";
const SideBar = ({ votes, setVotes, PostId }) => {
  const dispatch = useDispatch();
  const upvotes = useSelector((state) => state.votes.Upvoted);
  const downvotes = useSelector((state) => state.votes.Downvoted);
  const [votesNum, setVotesNum] = useState(0);
  const handleVote = async (type) => {
    try {
      const res = await axios.put(
        "http://localhost:3001/likes",
        { postId: PostId, type },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      if (res.status === 200 && type === "Upvote") {
        setVotesNum((prevState) => prevState + parseInt(res.data));
        dispatch(setUpvote(true));
        dispatch(setDownvote(false));
      }
      if (res.status === 200 && type === "Downvote") {
        setVotesNum((prevState) => prevState + parseInt(res.data));
        dispatch(setUpvote(false));
        dispatch(setDownvote(true));
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    votes.map(({ value }) =>
      setVotesNum((prevState) => prevState + parseInt(value))
    );
  }, [votes]);
  return (
    <section className="">
      <FontAwesomeIcon
        icon={upvotes ? arrowUpSolid : arrowUpRegular}
        size="2x"
        className="my-1 mx-auto"
        onClick={() => handleVote("Upvote")}
      />
      <p className="text-center font-bold text-lg">{votesNum}</p>
      <FontAwesomeIcon
        icon={downvotes ? arrowDownSolid : arrowDownRegular}
        size="2x"
        className="my-1 mx-auto"
        onClick={() => handleVote("Downvote")}
      />
    </section>
  );
};

export default SideBar;
