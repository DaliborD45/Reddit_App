import React from "react";
import Postcard from "../Postcard/Postcard";
const PostsCardsList = ({ allPosts }) => {
  return (
    <>
      {allPosts
        .map((attribute) => {
          return (
            <Postcard
              key={attribute.id}
              title={attribute.title}
              text={attribute.content}
              id={attribute.id}
              postLikes={attribute.Like}
              imageId={attribute.imageId}
              communityId={attribute.communityId}
              authorName={attribute.authorName}
              PostAuthorId={attribute.authorId}
            />
          );
        })
        .reverse()}
    </>
  );
};
export default PostsCardsList;
