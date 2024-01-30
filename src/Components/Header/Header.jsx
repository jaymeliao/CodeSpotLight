/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faComment, faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header class="bg-white shadow p-4 flex items-center justify-between">
      <div class="flex items-center">
        <div class="bg-gray-300 h-8 w-32 rounded mx-4"></div>
        <div class="hidden sm:block ml-4 relative mx-4">
          <input
            type="search"
            placeholder="Search"
            class="pl-10 pr-4 py-2 border rounded-full w-64"
          />
          <div class="absolute left-0 top-0 mt-2 ml-3">
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <nav class="flex items-center">
        <a href="#" class="mx-4">
          <FontAwesomeIcon
            icon={faPlus}
            className="h-5 w-5"
            style={{ color: "#d1d5db" }}
          />
        </a>
        <a href="#" class="mx-4">
          <div class="icon">
            <div class="icon">
              <FontAwesomeIcon className="h-5 w-5" icon={faComment} style={{ color: "#d1d5db" }}/>
            </div>
          </div>
        </a>
        <a href="#" class="mx-4">
          <div class="icon">
            <FontAwesomeIcon className="h-5 w-5" icon={faBell} />
          </div>
        </a>
        <a href="#" class="hidden sm:mx-4">
          <div class="icon">
            <img
              className="h-10 w-10 rounded-full"
              src="https://unsplash.it/100/100?image=1020"
              alt="Profile picture"
            />
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
