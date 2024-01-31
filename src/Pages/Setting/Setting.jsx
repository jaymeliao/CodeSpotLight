/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Setting.scss"
function Setting(props) {
  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="grid-placeholder w-8 h-8"></div>
          <span className="font-semibold">Logo</span>
        </div>
        <nav className="space-y-1">
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Projects</span>
          </a>
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Deployments</span>
          </a>
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Activity</span>
          </a>
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Domains</span>
          </a>
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Usage</span>
          </a>
          <a
            href="#"
         className="flex items-center space-x-2 p-2 rounded bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Settings</span>
          </a>
        </nav>
        <div className="space-y-2">
          <div className="grid-placeholder w-full h-6"></div>
          <div className="grid-placeholder w-full h-6"></div>
          <div className="grid-placeholder w-full h-6"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid-placeholder w-8 h-8"></div>
          <span>Tom Cook</span>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="grid-placeholder w-64 h-10"></div>
          <div className="grid-placeholder w-40 h-10"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-600 mb-1">Timezone</h3>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Pacific Standard Time</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                 className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l5 5 5-5H5.5z" />
                </svg>
              </div>
            </div>
            <button className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>

          <div>
            <h3 className="text-gray-600 mb-1">Change password</h3>
            <p className="text-sm text-gray-600 mb-4">
              Update your password associated with your account.
            </p>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current password"
             className="w-full px-4 py-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <input
                type="password"
                placeholder="New password"
             className="w-full px-4 py-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <input
                type="password"
                placeholder="Confirm password"
             className="w-full px-4 py-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
