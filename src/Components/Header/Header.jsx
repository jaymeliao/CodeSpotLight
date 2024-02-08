/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faPlus,
  faComment,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const blankProfile = process.env.PUBLIC_URL + "/images/blank-profile.png";
const apiUrl = process.env.REACT_APP_API_URL;
const profileImageAssetUrl = process.env.REACT_APP_Profile_Image_Folder;
const DropdownMenu = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded p-2 jm-dropdown-menu">
      {children}
    </div>
  );
};
function Header({ user, handleLogout }) {
  const navigate = useNavigate();

  const logoutAndNavigate = () => {
    handleLogout(); // Perform the logout logic passed from App
    navigate("/"); // Then navigate to the homepage
  };

  const [dropdown, setDropdown] = useState("");
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? "" : menu);
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <div className="bold mx-4">
          <h1>CodeSpotLight</h1>
        </div>
        <div className="hidden sm:block ml-4 relative mx-4">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full w-64"
          />
          <div className="absolute left-0 top-0 mt-2 ml-3">
            <div className="input-inner-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex items-center relative">
        <Link to="/publish">
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faPlus}
              style={{ color: "black" }}
            />
          </div>
        </Link>

        <div className="mx-4" onClick={() => toggleDropdown("Chat")}>
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faComment}
              style={{ color: "black" }}
            />
          </div>
          {dropdown === "Chat" && (
            <DropdownMenu>
              Chat Menu Content
              <h3 className="text-blue-300">This Feature is coming soon !!</h3>
            </DropdownMenu>
          )}
        </div>

        <div className="mx-4" onClick={() => toggleDropdown("Notification")}>
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faBell}
              style={{ color: "black" }}
            />
          </div>
          {dropdown === "Notification" && (
            <DropdownMenu>
              <h3>Notification Menu Content</h3>
              <h3 className="text-blue-300">This Feature is coming soon !!</h3>
            </DropdownMenu>
          )}
        </div>
        <div
          className="hidden sm:inline-block sm:mx-4"
          onClick={() => toggleDropdown("Account")}
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            //src={user?.profile_picture_url ? `${apiUrl}/${user.profile_picture_url}` : blankProfile}
            src={
              user?.profile_picture_url
                ? `${apiUrl}/${profileImageAssetUrl}/${
                    user.profile_picture_url
                  }?${new Date().getTime()}`
                : blankProfile
            }
            //?${new Date().getTime()} to bypassing any image caching issues.
            alt="Profile picture"
          />
          {dropdown === "Account" && (
            <DropdownMenu>
              <p>{user?.name || user?.username}</p>
              <p className="text-gray-500">@ {user?.username}</p>

              <button
                onClick={logoutAndNavigate}
                className="mt-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Logout
              </button>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
