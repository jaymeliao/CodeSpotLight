/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faComment, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bold mx-4"><h1>CodeSpotLight</h1></div>
        <div className="hidden sm:block ml-4 relative mx-4">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full w-64"
          />
          <div className="absolute left-0 top-0 mt-2 ml-3">
            <div className="input-inner-icon"></div>
          </div>
        </div>
      </div>
      <nav className="flex items-center">
      <a href="#" className="mx-4">
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faPlus}
              style={{ color: "black" }}
            />
          </div>
        </a>
        <a href="#" className="mx-4">
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faComment}
              style={{ color: "black" }}
            />
          </div>
        </a>
        <a href="#" className="mx-4">
          <div className="icon h-10 w-10 rounded-full">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faBell}
              style={{ color: "black" }}
            />
          </div>
        </a>
        <a href="#" className="hidden sm:inline-block sm:mx-4">
          <div>
            <img
              className="h-10 w-10 rounded-full"
              src="https://unsplash.it/100/100?image=1021"
              alt="Profile picture"
            />
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
