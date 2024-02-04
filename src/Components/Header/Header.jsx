/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faComment,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";


const DropdownMenu = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded p-2 jm-dropdown-menu">{children}</div>
  );
};
function Header({loggedIn}) {
  const [dropdown, setDropdown] = useState("");
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
    // For example, clear user data from state, make a logout request, and redirect
  };

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
     {loggedIn &&
      <nav className="flex items-center relative">
        <div className="mx-4" onClick={() => toggleDropdown("plus")}>
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faPlus}
              style={{ color: "black" }}
            />
          </div>
          {dropdown === "plus" && (
            <DropdownMenu>Plus Menu Content</DropdownMenu>
          )}
        </div>

        <div className="mx-4" onClick={() => toggleDropdown("Chat")}>
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faComment}
              style={{ color: "black" }}
            />
          </div>
          {dropdown === "Chat" && (
            <DropdownMenu>Chat Menu Content</DropdownMenu>
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
            <DropdownMenu>Notification Menu Content</DropdownMenu>
          )}
        </div>
        <div
          className="hidden sm:inline-block sm:mx-4"
          onClick={() => toggleDropdown("Account")}
        >
          <img
            className="h-10 w-10 rounded-full"
            src="https://unsplash.it/100/100?image=1021"
            alt="Profile picture"
          />
          {dropdown === "Account" && (
            <DropdownMenu>
              Account Menu Content
              <button
                onClick={handleLogout}
                className="mt-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Logout
              </button>
            </DropdownMenu>
          )}
        </div>
      </nav>}
    </header>
  );
}

export default Header;
