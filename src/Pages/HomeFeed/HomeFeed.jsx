import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import MainContentSection from "../../Components/MainContentSection/MainContentSection";
import "./HomeFeed.scss"
function HomeFeed(props) {
  return (
      <div class="jm-main-section min-h-screen flex bg-gray-50 text-gray-900">
        <SideBar />
        <MainContentSection />
      </div>
 
  );
}

export default HomeFeed;
