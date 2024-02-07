import React, { useState } from 'react';
import moment from 'moment'; // You may need to install moment for date formatting

const PostCard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const renderMedia = (media) => {
    if (media.media_type === 'image') {
      return <img src={media.media_url} alt="Post media" style={{ width: '100%' }} />;
    } else if (media.media_type === 'video') {
      return (
        <video width="320" height="240" controls>
          <source src={media.media_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  const formatDate = (date) => {
    const now = moment(new Date()); //todays date
    const end = moment(date); // another date
    const duration = moment.duration(now.diff(end));
    const days = duration.asDays();

    if (days < 1) {
      return `${duration.hours()} hours ago`;
    } else {
      return end.format('YYYY-MM-DD');
    }
  };

  return (
    <article className="bg-white p-4 shadow rounded mb-4">
      <div className="flex items-center mb-4">
        <img
          className="rounded-full h-12 w-12"
          src={post.authorProfileImageUrl || "https://picsum.photos/200"}
          alt="Profile"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">{post.authorName}</p>
          <p className="text-xs text-gray-500">@{post.authorUsername}</p>
        </div>
      </div>
      {post.media && post.media.length > 0 && renderMedia(post.media[0])}
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex justify-between items-center">
        <button className="text-gray-500">Like ({post.likes.length})</button>
        <button className="text-gray-500" onClick={() => setShowComments(!showComments)}>
          Comments ({post.comments.length})
        </button>
        
      </div>
      {showComments && (
        <div>
          {post.comments.slice(0, 5).map((comment) => (
            <div key={comment.id} className="my-2">
              <p className="text-sm text-gray-600">{comment.content}</p>
              <p className="text-xs text-gray-500">{formatDate(comment.updated_at)}</p>
            </div>
          ))}
          {post.comments.length > 5 && (
            <button className="text-blue-500 text-sm">View more comments</button>
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
