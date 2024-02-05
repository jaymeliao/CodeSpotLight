import React, { useState, useEffect } from "react";
import "./EditProfileForm.scss";
import axios from "axios";

function EditProfileForm({ user, setShowModal }) {
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
    //e.preventDefault();
    const updatedFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== user[key]) {
        updatedFormData.append(key, formData[key]);
      }
    });

    try {
      const token = localStorage.getItem("token");
      await axios.patch("http://localhost:8080/user", updatedFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModal(false);
    } catch (error) {
      console.log(error)
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="modal">
      <form className="p-12" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Edit Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={formData["name"]}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      @
                    </span>
                    <input
                      type="text"
                      name="username"
                      value={formData["username"]}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 px-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About Me
                </label>
                <div className="mt-2">
                  <textarea
                    name="self_intro"
                    rows={3}
                    value={formData["self_intro"]}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Profile Photo
                </label>

                <div className="mt-2 flex items-center gap-x-3">
                  <input
                    type="file"
                    className="form-control-file"
                    name="profile_picture"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleCancel}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
