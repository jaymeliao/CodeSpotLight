import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import axios from "axios";
import Cookies from "js-cookie";
import "./AddPostForm.scss";

const apiUrl = process.env.REACT_APP_API_URL;

const ItemType = {
  IMAGE: "image",
};

const Image = ({ image, index, moveImage, removeImage }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType.IMAGE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType.IMAGE,
    item: { type: ItemType.IMAGE, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="relative"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src={image.preview}
        alt={`Image ${index + 1}`}
        className="w-full h-auto rounded-md"
      />
      <button
        type="button"
        onClick={() => removeImage(index)}
        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
      >
        &times;
      </button>
    </div>
  );
};

const PostForm = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const moveImage = (fromIndex, toIndex) => {
    setImages((prevImages) =>
      update(prevImages, {
        $splice: [
          [fromIndex, 1],
          [toIndex, 0, prevImages[fromIndex]],
        ],
      })
    );
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    tags.split(",").forEach((tag) => {
      if (tag.trim() !== "") formData.append("tags", tag.trim());
    });
    images.forEach(({ file }) => {
      formData.append("media", file);
    });

    try {
      const token = Cookies.get("token");

      const response = await axios.post(`${apiUrl}/posts/new-post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error uploading the post:", error);
      alert("Failed to add the post. Please try again.");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">
            Publish to Social Media
          </h1>
          <form id="publishForm" onSubmit={handleSubmit}>
            <div
              {...getRootProps()}
              className={`drag-area ${isDragActive ? "highlight" : ""}`}
            >
              <input {...getInputProps()} />
              <p>Drag & Drop images here or click to upload</p>
            </div>
            <div id="gallery" className="mt-4 grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  image={image}
                  index={index}
                  moveImage={moveImage}
                  removeImage={removeImage}
                />
              ))}
            </div>
            <textarea
              id="textContent"
              className="form-textarea mt-4 p-2 w-full border rounded-md"
              rows="4"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
              id="tagsInput"
              type="text"
              className="form-input mt-4 p-2 w-full border rounded-md"
              placeholder="Enter tags (comma-separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </DndProvider>
  );
};

export default PostForm;
