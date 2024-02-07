/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import CommentItem from "../CommentItem/CommentItem";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

function CommentSection({ post }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return; // Prevent submitting empty comments

    try {
      const token = localStorage.getItem("token");
      // Use axios to post the comment
      const response = await axios.post(`${apiUrl}/comments/new-comment`,
        {
          postId: post.id,
          content: commentText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Axios directly returns the data object, no need to call .json()
      const newComment = response.data; // Assuming your backend sends the new comment as response data
      setComments(currentComments => [...currentComments, newComment.comment]); // Use a function to ensure you're working with the most current state
      setCommentText(""); // Reset the input field
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleCommentSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            id="comment"
            rows="3"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex ml-auto items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
        >
          Post comment
        </button>
      </form>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}

export default CommentSection;
