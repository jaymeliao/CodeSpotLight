import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
function PostForm() {
  const navigate = useNavigate()
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [media, setMedia] = useState([]);

  const handleContentChange = (e) => setContent(e.target.value);
  const handleTagsChange = (e) => setTags(e.target.value);
  const handleMediaChange = (e) => setMedia(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    // Assuming tags are entered as comma-separated values, like "tag1,tag2"
    tags.split(',').forEach(tag => {
      if (tag.trim() !== '') formData.append('tags', tag.trim());
    });
    // Add media files to formData
    Array.from(media).forEach(file => {
      formData.append('media', file);
    });

    try {

      const token = localStorage.getItem("token");
      const response = await axios.post(`${apiUrl}/posts/new-post`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert('Post added successfully!');
      navigate("/")
    } catch (error) {
      console.error('Error uploading the post:', error);
      alert('Failed to add the post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <label htmlFor="tags">Tags (comma-separated):</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={handleTagsChange}
        />
      </div>
      <div>
        <label htmlFor="media">Media (images/videos):</label>
        <input
          type="file"
          id="media"
          multiple
          onChange={handleMediaChange}
        />
      </div>
      <button type="submit">Submit Post</button>
      <button onClick={()=>navigate("/")}>cancelm</button>
    </form>
  );
}

export default PostForm;
