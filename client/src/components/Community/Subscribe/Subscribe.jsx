import React, { useEffect, useState } from "react";
import axios from "axios";
const Subscribe = ({ communityId }) => {
  const [isSubscribed, setSubscribed] = useState(false);
  const handleCommunitySubscribe = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3001/communityuser/subscribe`,
        { communityId: communityId },
        {
          headers: { authToken: localStorage.getItem("accessToken") },
        }
      );
      console.log(res);
      setSubscribed(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCommunityUnsubscribe = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/communityuser/unsubscribe/${communityId}`,
        {
          headers: { authToken: localStorage.getItem("accessToken") },
        }
      );
      console.log(res);
      setSubscribed(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const isSubscribedHandler = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/communityuser/isSubscribed/${communityId}`,

          {
            headers: { authToken: localStorage.getItem("accessToken") },
          }
        );
        if (res.status === 200) {
          setSubscribed(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    isSubscribedHandler();
  }, [communityId]);
  return (
    <>
      {isSubscribed ? (
        <button
          className="font-semibold text-white bg-red-500 max-h-8 px-4 mt-9 ml-5 rounded-lg hover:bg-opacity-90"
          onClick={handleCommunityUnsubscribe}
        >
          Joined
        </button>
      ) : (
        <button
          onClick={handleCommunitySubscribe}
          className="font-semibold text-white bg-blue-500 max-h-8 px-4 mt-9 ml-5 rounded-lg hover:bg-opacity-90"
        >
          Subscribe
        </button>
      )}
    </>
  );
};

export default Subscribe;
