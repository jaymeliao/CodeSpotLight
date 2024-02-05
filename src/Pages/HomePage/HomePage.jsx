import React from "react";
import "./HomePage.scss"
import SideBar from "../../Components/SideBar/SideBar";
import FeedPostsList from "../../Components/FeedPostsList/FeedPostsList";
import Header from "../../Components/Header/Header";
function HomePage({user, handleLogout}) {


  return (
      <div className="jm-main-section min-h-screen flex bg-gray-200 text-gray-900">
        <Header user={user} handleLogout={handleLogout} />
        <SideBar user={user}/>
        <FeedPostsList/>
      </div>
 
  );
}

export default HomePage;
