import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard.jsx";
import PostCardSkeletonLoader from "../PostCardSkeletonLoader/PostCardSkeletonLoader.jsx";
const PostsListSection = ({ apiUrl, filterByUser, userId }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [apiUrl, filterByUser, userId]);

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
