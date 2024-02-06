import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import SideBar from "../../Components/SideBar/SideBar";
import FeedPostsList from "../../Components/FeedPostsList/FeedPostsList";
import Header from "../../Components/Header/Header";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

function HomePage({ user, handleLogout }) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    self_intro: user.self_intro || "",
    profile_picture: null, // For file inputs, start with null
  });

  useEffect(() => {
    // Initialize formData state when component mounts or user data changes
    setFormData({
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      self_intro: user.self_intro || "",
      profile_picture: null,
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_picture") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : null, // Store the selected file
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // i will umcomment this
    const updatedFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== user[key]) {
        updatedFormData.append(key, formData[key]);
      }
    });

    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${apiUrl}/user`, updatedFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="jm-main-section min-h-screen flex bg-gray-200 text-gray-900">
      <Header user={user} handleLogout={handleLogout} />
      <SideBar
        user={user}
        formData={formData} 
        setFormData={setFormData}
        handleEditClick={handleEditClick}
        showModal={showModal}
        setShowModal={setShowModal}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <FeedPostsList />
    </div>
  );
}

export default HomePage;
