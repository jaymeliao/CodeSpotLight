/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CommentItem from "../CommentItem/CommentItem";

function CommentSection({ post }) {
  return (
   
      <div className="mt-6">
      <form >
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" class="sr-only">Your comment</label>
              <textarea id="comment" rows="3"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..." required></textarea>
          </div>
          <button type="submit"
              class="inline-flex ml-auto items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ">
              Post comment
          </button>
      </form>
      {post.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      </div>


        
  
  );
}

export default CommentSection;
