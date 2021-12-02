import React from "react";
import axios from "axios";

const SideBar = ({ votes, setVotes, PostId }) => {
  const handleVote = async (status) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/likes",
        { postId:PostId, status: status },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      if (status === "Upvote" && res.status === 200) {
        setVotes((prevState) => prevState + 1);
      } else if (status === "Downvote" && res.status === 200) {
        setVotes((prevState) => prevState - 1);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={() => handleVote("Upvote")}
        version="1.1"
        width="25"
        height="25"
        className="transform -rotate-90 mx-auto mt-3"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <g transform="translate(128 128) scale(0.72 0.72)">
          <g transform="translate(-175.05 -175.05) scale(3.89 3.89)">
            <path
              d="M 58.345 76.714 c -0.598 0 -1.196 -0.228 -1.651 -0.683 l -9.44 -9.44 c -0.441 -0.441 -0.684 -1.027 -0.684 -1.651 s 0.242 -1.21 0.684 -1.651 l 9.277 -9.277 H 2.335 C 1.048 54.011 0 52.963 0 51.676 V 38.325 c 0 -1.288 1.048 -2.335 2.335 -2.335 H 56.53 l -9.277 -9.278 c -0.441 -0.441 -0.684 -1.027 -0.684 -1.651 c 0 -0.624 0.242 -1.21 0.684 -1.651 l 9.44 -9.44 c 0.91 -0.911 2.393 -0.911 3.303 0 l 29.33 29.329 c 0.459 0.46 0.697 1.078 0.672 1.74 c 0.025 0.585 -0.213 1.203 -0.672 1.663 l -29.33 29.33 C 59.541 76.486 58.942 76.714 58.345 76.714 z M 2.335 37.989 C 2.15 37.989 2 38.14 2 38.325 v 13.351 c 0 0.185 0.15 0.335 0.335 0.335 h 59.023 L 48.667 64.702 c -0.131 0.131 -0.131 0.344 0 0.475 l 9.44 9.44 c 0.131 0.131 0.344 0.131 0.475 0 l 29.329 -29.329 c 0.078 -0.078 0.092 -0.18 0.089 -0.25 c 0.003 -0.147 -0.011 -0.249 -0.09 -0.327 L 58.582 15.383 c -0.131 -0.131 -0.344 -0.131 -0.475 0 l -9.44 9.44 c -0.131 0.131 -0.131 0.343 0 0.474 l 12.691 12.692 H 2.335 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill="#E05002"
            />
          </g>
        </g>
      </svg>
      <p className="text-center">{votes && votes}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="25"
        height="25"
        className="transform rotate-90 mx-auto  mb-3"
        onClick={() => handleVote("Downvote")}
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <g transform="translate(128 128) scale(0.72 0.72)">
          <g transform="translate(-175.05 -175.05) scale(3.89 3.89)">
            <path
              d="M 58.345 76.714 c -0.598 0 -1.196 -0.228 -1.651 -0.683 l -9.44 -9.44 c -0.441 -0.441 -0.684 -1.027 -0.684 -1.651 s 0.242 -1.21 0.684 -1.651 l 9.277 -9.277 H 2.335 C 1.048 54.011 0 52.963 0 51.676 V 38.325 c 0 -1.288 1.048 -2.335 2.335 -2.335 H 56.53 l -9.277 -9.278 c -0.441 -0.441 -0.684 -1.027 -0.684 -1.651 c 0 -0.624 0.242 -1.21 0.684 -1.651 l 9.44 -9.44 c 0.91 -0.911 2.393 -0.911 3.303 0 l 29.33 29.329 c 0.459 0.46 0.697 1.078 0.672 1.74 c 0.025 0.585 -0.213 1.203 -0.672 1.663 l -29.33 29.33 C 59.541 76.486 58.942 76.714 58.345 76.714 z M 2.335 37.989 C 2.15 37.989 2 38.14 2 38.325 v 13.351 c 0 0.185 0.15 0.335 0.335 0.335 h 59.023 L 48.667 64.702 c -0.131 0.131 -0.131 0.344 0 0.475 l 9.44 9.44 c 0.131 0.131 0.344 0.131 0.475 0 l 29.329 -29.329 c 0.078 -0.078 0.092 -0.18 0.089 -0.25 c 0.003 -0.147 -0.011 -0.249 -0.09 -0.327 L 58.582 15.383 c -0.131 -0.131 -0.344 -0.131 -0.475 0 l -9.44 9.44 c -0.131 0.131 -0.131 0.343 0 0.474 l 12.691 12.692 H 2.335 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </section>
  );
};

export default SideBar;