import React from "react";

function PostCardSkeletonLoader(props) {
  return (
    <article className="bg-white p-4 shadow rounded mb-4">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="ml-4">
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="post-image mb-4"></div>
      <p className="text-gray-300 mb-4 bg-gray-300 rounded min">
       {"placeholder"}
      </p>
      <div className="flex justify-between">
        <button className="text-gray-300 bg-gray-300">Like</button>
        <button className="text-gray-300 bg-gray-300">Comment</button>
        
      </div>
    </article>
  );
}

export default PostCardSkeletonLoader;
