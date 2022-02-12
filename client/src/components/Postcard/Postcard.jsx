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
import { Image as ShowImage } from "cloudinary-react";
import { useSelector } from "react-redux";
const Postcard = ({
  title,
  text,
  id,
  postLikes,
  imageId,
  communityId,
  PostAuthorId,
  authorName,
}) => {
  const [votes, setVotes] = useState(0);
  const [community, setCommunity] = useState({ name: "" });
  const upvotes = useSelector((state) => state.votes.Upvoted);
  const [manageUpvote, setManageVote] = useState({
    isUpvoted: false,
    isDownvoted: false,
  });
  if (!upvotes) {
    console.log(upvotes);
  }
  useEffect(() => {
    const getCommunityById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/community/byId/${communityId}`
        );
        console.log(res);
        setCommunity(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCommunityById();
  }, []);
  useEffect(() => {
    postLikes.map(({ value }) =>
      setVotes((prevState) => prevState + parseInt(value))
    );
    const handleFindVote = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/likes/getLikeByUserId/${id}`,
          {
            headers: {
              authToken: localStorage.getItem("accessToken"),
            },
          }
        );
        console.log(res);
        if (res.status === 200 && res.data === "Downvote") {
          setManageVote((prevState) => ({ ...prevState, isDownvoted: true }));
        }
        if (res.status === 200 && res.data === "Upvote") {
          setManageVote((prevState) => ({ ...prevState, isUpvoted: true }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleFindVote();
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
        setManageVote((prevState) => ({ ...prevState, isUpvoted: true }));
        setManageVote((prevState) => ({ ...prevState, isDownvoted: false }));
      }
      if (res.status === 200 && type === "Downvote") {
        setVotes((prevState) => prevState + parseInt(res.data));
        setManageVote((prevState) => ({ ...prevState, isDownvoted: true }));
        setManageVote((prevState) => ({ ...prevState, isUpvoted: false }));
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl lg:w-full flex  mt-9  rounded-sm  overflow-hidden border border-gray-300 ">
      <section className="w-1/12 bg-gray-200 flex flex-col pt-2">
        <FontAwesomeIcon
          icon={manageUpvote.isUpvoted ? arrowUpSolid : arrowUpRegular}
          size="2x"
          className="my-1 mx-auto"
          onClick={() => handleVote("Upvote")}
        />

        <p className="mx-auto font-bold text-lg">{votes}</p>
        <FontAwesomeIcon
          icon={manageUpvote.isDownvoted ? arrowDownSolid : arrowDownRegular}
          size="2x"
          className="my-1 mx-auto"
          onClick={() => handleVote("Downvote")}
        />
      </section>
      <section className="w-11/12 bg-gray-100">
        <section className="text-xs flex pt-2 pl-2">
          <p className="font-bold ">{`r/${community.name}`}</p>
          <p className="pl-2 text-gray-400">{`Posted by u/${authorName}`}</p>
        </section>
        <section onClick={() => navigate(`/post/${id}`)}>
          <section className="w-11/12 ml-4 mt-2">
            <p className="text-md font-bold text-xl">{title}</p>
            <p className=" mt-3 mb-5 text-black">
              {text.length > 550 ? `${text.slice(0, 550)}...` : text}
            </p>
          </section>
          {imageId !== null && (
            <section className="w-full">
              <ShowImage
                cloudName="dqhkvx2z5"
                publicId={imageId}
                className="max-w-full max-h-full mx-auto "
              />
            </section>
          )}
        </section>
      </section>
    </div>
  );
};

export default Postcard;
