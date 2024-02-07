import React from "react";
import moment from "moment"; // You may need to install moment for date formatting
const apiUrl = process.env.REACT_APP_API_URL;
const profileImageAssetUrl = process.env.REACT_APP_Profile_Image_Folder;
const blankProfile = process.env.PUBLIC_URL + "/images/blank-profile.png";

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

// "content": "Great post!",
// "created_at": "2024-02-07T13:25:50.000Z",
// "updated_at": "2024-02-07T13:25:50.000Z",
// "commenterUserId": 2,
// "commenterUsername": "user2",
// "commenterName": "User 2",
// "commenterProfilePictureUrl": "pp2.jpeg"

function CommentItem({ comment }) {
  return (
    <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              class="mr-2 w-6 h-6 rounded-full object-cover"
              src={
                comment.commenterProfilePictureUrl
                  ? `${apiUrl}/${profileImageAssetUrl}/${comment.commenterProfilePictureUrl}`
                  : blankProfile
              }
              alt="commenter profile url"
            />
            {comment.commenterName}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(comment.created_at)}
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span class="sr-only">Comment settings</span>
        </button>
      </footer>
      <p class="text-gray-500 dark:text-gray-400">{comment.content}</p>
      <div class="flex items-center mt-4 space-x-4">
        <button
          type="button"
          class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
        >
          <svg
            class="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}

export default CommentItem;
