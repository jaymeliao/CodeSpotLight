/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function SideBar(props) {
  return (
    <div className="w-64 shadow-md">
      <div className="px-4 py-6">
        {/* Logo placeholder */}
        <div className="h-12 w-12 bg-blue-500 rounded-full mb-6">
          <img
            className="rounded-full"
            src="https://unsplash.it/100/100?image=1021"
            alt="Profile picture"
          />
        </div>
        <nav>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md mb-2"
          >
            <span className="h-6 w-6 bg-blue-500 rounded mr-3"></span>
            My Posts
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
      </div>
      <div className="px-4 py-6 border-t border-gray-200">
        <p className="text-xs text-gray-600 uppercase mb-4">My Tags</p>
        <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2">
          <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
          Herpicons
        </div>
        <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md mb-2">
          <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
          Tailwind Labs
        </div>
        <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
          <span className="h-6 w-6 bg-gray-300 rounded mr-3"></span>
          Workcation
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
              {truncateString("Tom Cookdasfasfdsafsfdfdfdsafasfafddasfdf", 10)}
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
              {truncateString("Tom Cookdasfasfdsafsfdfdfdsafasfafddasfdf", 10)}
            </p>
            <p className="text-xs text-gray-500">Software Enginner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
