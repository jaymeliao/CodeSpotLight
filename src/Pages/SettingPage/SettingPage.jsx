/* eslint-disable jsx-a11y/anchor-is-valid */

// TODO : implement in the future !!
import React from "react";
import "./SettingPage.scss";
function SettingPage({ user, handleLogout }) {
  return (
    <div className="min-h-screen flex">
      <div className="relative w-72 bg-gray-800 text-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="grid-placeholder w-8 h-8">CodeSpotLight</div>
        </div>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded bg-gray-700"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded"
          >
            <div className="grid-placeholder w-6 h-6"></div>
            <span>Account</span>
          </a>
        </nav>

        <button className=" absolute bottom-12  hover:bg-white hover:text-black bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Log Out
        </button>
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

export default SettingPage;
