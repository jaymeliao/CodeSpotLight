import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import MainContentSection from "../../Components/MainContentSection/MainContentSection";

function HomeFeed(props) {
  return (
    <body class="bg-gray-50 text-gray-900">
      <div class="min-h-screen flex">
        <SideBar />
        <MainContentSection />
      </div>
    </body>
  );
}

export default HomeFeed;
