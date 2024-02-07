import React, { useState } from "react";
import moment from "moment"; // You may need to install moment for date formatting
const blankProfile = process.env.PUBLIC_URL + "/images/blank-profile.png";
const apiUrl = process.env.REACT_APP_API_URL;
const profileImageAssetUrl = process.env.REACT_APP_Profile_Image_Folder;
const PostCard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const renderMedia = (media) => {
    if (media.media_type === "image") {
      return (
        <img
          src={media.media_url}
          alt="Post media"
          style={{ width: "100%", height: "20vw", objectFit: "cover" }}
        />
      );
    } else if (media.media_type === "video") {
      return (
        <video
          style={{ width: "100%", height: "20vw", objectFit: "cover" }}
          controls
          autoPlay
          muted
          loop
        >
          <source src={media.media_url} type="video/mp4" />
          <source src={media.media_url} type="video/ogg" />
          <source src="path_to_your_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  const formatDate = (date) => {
    const now = moment(new Date()); // Today's date
    const end = moment(date); // Another date
    const duration = moment.duration(now.diff(end));
    const minutes = duration.asMinutes(); // Get duration in minutes

    if (minutes < 1) {
      return `${Math.floor(duration.asSeconds())} seconds ago`; // Display seconds if less than a minute
    } else if (minutes < 50) {
      return `${Math.floor(minutes)} minutes ago`; // Display minutes if less than 50
    } else {
      return end.format("YYYY-MM-DD"); // Display date if more than 50 minutes
    }
  };

  return (
    <article className="bg-white p-4 shadow rounded mb-4">
      <div className="flex items-center mb-4">
        <img
          className="rounded-full h-12 w-12 object-cover"
          src={
            post.authorProfileImageUrl
              ? `${apiUrl}/${profileImageAssetUrl}/${post.authorProfileImageUrl}`
              : blankProfile
          }
          alt="Profile"
        />
        <div className="ml-3">
          <p className="text-md font-medium text-gray-700">{post.authorName}</p>
        </div>
        <div className="ml-1">
          <p className="text-sm text-gray-500">@{post.authorUsername}</p>
        </div>

        <div className="ml-auto hidden md:flex flex-col">
          <p className="text-xs text-blue-700">
            Created : {formatDate(post.created_at)}
          </p>
          <p className="text-xs text-blue-300">
            Updated :{formatDate(post.updated_at)}
          </p>
        </div>
      </div>
      {post.media && post.media.length > 0 && renderMedia(post.media[0])}
      <p className="text-gray-700 my-4">{post.content}</p>
      <div className="flex justify-between items-center">
        <button className="text-gray-500">Like ({post.likes.length})</button>
        <button
          className="text-gray-500"
          onClick={() => setShowComments(!showComments)}
        >
          Comments ({post.comments.length})
        </button>
      </div>
      {showComments && (
        <div>
          {post.comments.slice(0, 5).map((comment) => (
            <div key={comment.id} className="my-4 flex justify-between">
              <p className="text-sm text-gray-600">{comment.content}</p>
              <p className="text-xs text-gray-500">
                {formatDate(comment.updated_at)}
              </p>
            </div>
          ))}
          {post.comments.length > 5 && (
            <button className="text-blue-500 text-sm">
              View more comments
            </button>
          )}
          {/* Placeholder for comment input */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      )}
    </article>
  );
};

export default PostCard;
