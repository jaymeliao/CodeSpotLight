import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import SideBar from "../../Components/SideBar/SideBar";
import PostsListSection from "../../Components/PostsListSection/PostsListSection";
import Header from "../../Components/Header/Header";
import axios from "axios";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
const apiUrl = process.env.REACT_APP_API_URL;

function HomePage({ user, handleLogout, setUser }) {
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
    e.preventDefault(); 
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
      // Update the user prop with the new user data
      const updatedUser = { ...user, ...formData };
      setUser(updatedUser);
      console.log(updatedUser);
      setShowModal(false);
    } catch (error) {
      console.log(error);
      console.error("Error updating profile:", error);
    }
  };

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const switchPostList = async(postsType) => {

    if (postsType === "myPosts") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/posts/my-posts`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch liked posts", error);
      }
    }

    else if (postsType === "likedPosts") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/posts/liked-posts`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch liked posts", error);
      }
    } else {
      //homeFeedPost
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    }
  };

  return (
    <div className="jm-main-section min-h-screen flex bg-blue-300 text-gray-900">
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
        switchPostList={switchPostList}
      />
      <div className="container mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PostsListSection
            posts={posts}
            setPosts={setPosts}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <ExtraSection />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
