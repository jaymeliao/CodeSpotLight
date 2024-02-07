/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faPen } from "@fortawesome/free-solid-svg-icons";
import EditProfileForm from "../EditProfileForm/EditProfileForm";
const blankProfile = process.env.PUBLIC_URL + "/images/blank-profile.png";
const apiUrl = process.env.REACT_APP_API_URL;
const profileImageAssetUrl = process.env.REACT_APP_Profile_Image_Folder ;
function truncateString(str, num = 10) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function SideBar(props) {
  return (
    <>
      <div className="w-96 shadow-md bg-white my-4 ">
        <div className="flex justify-end">
          <button
            onClick={props.handleEditClick}
            className="text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-4"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center pb-3">
          <div className="h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <img
              className="rounded-full h-24 w-24 object-cover" // Ensure the image covers the area well
              src={
                props.user?.profile_picture_url
                  ? `${apiUrl}/${profileImageAssetUrl}/${props.user.profile_picture_url}`
                  : blankProfile
              }
              alt="Profile picture"
            />
          </div>
          <div className="text-center mt-3">
            <p className="text-m font-medium text-gray-700">
              {truncateString(props.user?.name || props.user?.username)}
            </p>
            <p className="text-xs text-gray-500">@{props.user?.username}</p>
          </div>
        </div>
        {props.user.self_intro ? (
          <p className="px-4 mb-4 text-gray-700 text-center">
            {props.user.self_intro}
          </p>
        ) : (
          <p className="px-4 mb-4 text-gray-300 text-center">
            You haven't written anything about yourself yet.
          </p>
        )}

        <nav className="px-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-blue-500 rounded mr-3"></span>
            Home
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
            My Post
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
            Liked Post
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
            BookMarked Post
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
            Draft
          </a>
        </nav>

        <div className="px-4 py-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 uppercase mb-4">My Tags</p>
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2">
            <span className="h-6 w-6 rounded mr-3">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            typescript
          </div>
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2">
            <span className="h-6 w-6 rounded mr-3">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            database
          </div>
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span className="h-6 w-6 rounded mr-3">
              <FontAwesomeIcon icon={faHashtag} />
            </span>
            aws
          </div>
        </div>
        <div className="px-4 py-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 uppercase mb-4">My Friends</p>
          <div className="flex items-center px-4 py-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1022"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Tom Cook</p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
          <div className="flex items-center px-4 py-2 ">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1023"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Tom Cook</p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
          <div className="flex items-center px-4 py-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1024"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Tom Cook</p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
          <div className="flex items-center px-4 py-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1025"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Tom Cook</p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
          <div className="flex items-center px-4 py-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1026"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 ">
                {truncateString(
                  "Tom Cookdasfasfdsafsfdfdfdsafasfafddasfdf",
                  10
                )}
              </p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
          <div className="flex items-center px-4 py-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full mr-3">
              <img
                className="rounded-full"
                src="https://unsplash.it/100/100?image=1026"
                alt="Profile picture"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 ">
                {truncateString(
                  "Tom Cookdasfasfdsafsfdfdfdsafasfafddasfdf",
                  10
                )}
              </p>
              <p className="text-xs text-gray-500">Software Enginner</p>
            </div>
          </div>
        </div>
      </div>
      {props.showModal && <EditProfileForm {...props} />}
    </>
  );
}

export default SideBar;
