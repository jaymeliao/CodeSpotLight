import React from "react";

import PostCard from "../PostCard/PostCard.jsx";
import PostCardSkeletonLoader from "../PostCardSkeletonLoader/PostCardSkeletonLoader.jsx";
const PostsListSection = ({ posts, setPosts, isLoading, setIsLoading }) => {
  if (isLoading) {
    return (
      <div className="md:col-span-2">
        <PostCardSkeletonLoader />
        <PostCardSkeletonLoader />
        <PostCardSkeletonLoader />
      </div>
    );
  }

  return (
    <div className="md:col-span-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsListSection;
