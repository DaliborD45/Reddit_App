import React, { useState, useEffect } from "react";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import AboutProfile from "./AboutProfile/AboutProfile";
import UpdateProfileModal from "./AboutProfile/UpdateProfileModal/UpdateProfileModal";
import { useSelector, useDispatch } from "react-redux";
import PostsCardsList from "../PostsCardsList/PostsCardsList";
import NoPostsFound from "../NoPostsFound/NoPostsFound";
import MyCommunities from "./MyCommunities/MyCommunities";
import AddPost from "../Homepage/AddPost/AddPost";
import { getPostsByUserIdThunk } from "../../features/PostReducer";
const Profile = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const allPosts = useSelector((state) => state.allPosts.userIdPosts);
  const userId = useSelector((state) => state.currentUser.value.id);

  console.log(allPosts);
  useEffect(() => {
    const handleFetchData = async (number) => {
      dispatch(getPostsByUserIdThunk(number));
    };
    handleFetchData(userId);
  }, [userId]);

  return (
    <div className="bg-gray-300 overflow-x-hidden  min-h-screen ">
      <LoggedNavbar />
      <section className="lg:w-[1250px] shrink-0  mb-20  flex md:ml-10 lg:mx-auto mt-10  ">
        <section className="w-10/12 pl-20">
          <section className="w-9/12 text-center">
            <h1 className="pt-8   font-bold text-4xl ">Users Posts</h1>
          </section>
          <AddPost />
          <section>
            {allPosts.length > 0 ? (
              <PostsCardsList allPosts={allPosts} />
            ) : (
              <NoPostsFound />
            )}
          </section>
        </section>
        <section className="hidden lg:block -ml-40 mt-16">
          <AboutProfile className="" setModalOpen={setModalOpen} />
          <MyCommunities />
        </section>
      </section>
      <UpdateProfileModal
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default Profile;
