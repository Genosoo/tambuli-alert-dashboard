/* eslint-disable react/prop-types */
import { useState } from "react";

const AddVideoForm = ({ onVideoAdd }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddVideo = () => {
    onVideoAdd(videoUrl);
    setVideoUrl("");
  };

  return (
    <div className="add-video-form">
      <h2>Add Video</h2>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleAddVideo}>Add Video</button>
    </div>
  );
};

export default AddVideoForm;
