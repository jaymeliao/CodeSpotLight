/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useRef } from "react";
import "./AddPostForm.scss";

const PostForm = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = () => {
    setHighlighted(true);
  };

  const unhighlight = () => {
    setHighlighted(false);
  };

  const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const newImage = reader.result;
      setImages((prevImages) => [...prevImages, newImage]);
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Publish to Social Media</h1>
        <form id="publishForm">
          <div
            id="dropArea"
            className={`drag-area ${highlighted ? "highlight" : ""}`}
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={highlight}
            onDragEnter={highlight}
            onDragLeave={unhighlight}
            onDragEnd={unhighlight}
          >
            <p>Drag & Drop images here or click to upload</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div id="gallery" className="mt-4 grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            ))}
          </div>
          <textarea
            id="textContent"
            className="form-textarea mt-4 p-2 w-full border rounded-md"
            rows="4"
            placeholder="What's on your mind?"
          ></textarea>
          <input
            id="tagsInput"
            type="text"
            className="form-input mt-4 p-2 w-full border rounded-md"
            placeholder="Enter tags (comma-separated)"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Publish
          </button>
        </form>
      </div>
      <script src = "./drag_drop.js"></script>
    </div>
  );
};

export default PostForm;
