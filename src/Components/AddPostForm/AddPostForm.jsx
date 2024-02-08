// import React, { useState, useCallback, useRef } from "react";
// import axios from "axios";
// const apiUrl = process.env.REACT_APP_API_URL;

// function AddPostForm(props) {
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState("");
//   const [mediaFiles, setMediaFiles] = useState([]);
//   const [message, setMessage] = useState(""); // For displaying success or error messages
//   const fileInputRef = useRef(null); // Ref for the file input

//   const handleContentChange = (e) => setContent(e.target.value);
//   const handleTagsChange = (e) => setTags(e.target.value);

//   const onDrop = useCallback((acceptedFiles) => {
//     setMediaFiles([...acceptedFiles]);
//   }, []);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     onDrop(e.dataTransfer.files);
//   };

//   const handleFileInputChange = (e) => {
//     onDrop(e.target.files);
//   };

//   const handleClickArea = () => {
//     fileInputRef.current.click(); // Trigger file input click on drop area click
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("content", content);
//     tags.split(",").forEach((tag) => formData.append("tags", tag.trim()));
//     mediaFiles.forEach((file) => formData.append("media", file));
//     console.log(formData)
//     // try {
//     //   const token = localStorage.getItem("token");
//     //   await axios.post(`${apiUrl}/posts/new-post`, formData, {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //       Authorization: `Bearer ${token}`,
//     //     },
//     //   });
//     //   console.log("newPost");
//     //   console.log(formData);
//     //   // Handle success
//     //   setMessage("Post published successfully!");
//     //   // Clear the form
//     //   setContent("");
//     //   setTags("");
//     //   setMediaFiles([]);
//     // } catch (error) {
//     //   console.error("Error uploading the post:", error);
//     //   // Handle error
//     //   setMessage("Failed to publish the post. Please try again.");
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {message && <p>{message}</p>} {/* Display success/error message */}
//       <label htmlFor="content">Content:</label>
//       <textarea
//         id="content"
//         name="content"
//         value={content}
//         onChange={handleContentChange}
//       />
//       <label htmlFor="tags">Tags (comma-separated):</label>
//       <input
//         type="text"
//         id="tags"
//         name="tags"
//         value={tags}
//         onChange={handleTagsChange}
//       />
//       <div
//         className="drop-area bg-blue-700"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         onClick={handleClickArea}
//       >
//         Drag and drop media here or click to select files
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileInputChange}
//           multiple
//           style={{ display: "none" }}
//         />
//       </div>
//       <button type="submit">Publish</button>
//     </form>
//   );
// }

// export default AddPostForm;
import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const AddPostForm = () => {
  const [content, setContent] = useState('');
  // Keep tags as a comma-separated string
  const [tags, setTags] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleContentChange = (e) => setContent(e.target.value);
  // Directly handle the input change without splitting here
  const handleTagsChange = (e) => setTags(e.target.value);
  const handleFileChange = (e) => setMediaFiles(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    // Split and trim tags when appending to FormData
    tags.split(',').forEach(tag => {
      if (tag.trim() !== '') {
        formData.append('tags', tag.trim());
      }
    });
    Array.from(mediaFiles).forEach(file => formData.append('media', file));

    try {
        const token = localStorage.getItem("token");
      const response = await axios.post(`${apiUrl}/posts/new-post`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      // Reset the form on successful submission
      setContent('');
      setTags('');
      setMediaFiles([]);
      alert('Post added successfully!');
    } catch (error) {
      console.error('Error uploading the post:', error);
      alert('Failed to add the post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content:</label>
      <textarea id="content" name="content" value={content} onChange={handleContentChange} />

      <label htmlFor="tags">Tags (comma-separated):</label>
      <input type="text" id="tags" name="tags" value={tags} onChange={handleTagsChange} />

      <label htmlFor="media">Media:</label>
      <input type="file" id="media" name="media" onChange={handleFileChange} multiple />

      <button type="submit">Publish</button>
    </form>
  );
};

export default AddPostForm;
