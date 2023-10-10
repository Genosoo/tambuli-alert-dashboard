/* eslint-disable react/prop-types */
import { useState } from 'react';

const VideoForm = ({ onAddVideo, videoSources }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoName, setVideoName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isURLValid = (inputUrl) => {
    // Regular expression for basic URL validation
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(inputUrl);
  };

  const isNameUnique = (name) => {
    return !videoSources.some((video) => video.name === name);
  };

  const handleAddVideo = () => {
    if (videoUrl && videoName && isURLValid(videoUrl) && isNameUnique(videoName)) {
      const newVideo = {
        id: videoSources.length + 1,
        name: videoName,
        url: videoUrl,
        error: ''
      };

      onAddVideo(newVideo);
      setVideoUrl('');
      setVideoName('');
      setError('');
      setSuccessMessage('Stream added successfully!');
    } else {
      if (!videoName) {
        setError('Please enter a stream name.');
      } else if (!isURLValid(videoUrl)) {
        setError('Please enter a valid URL.');
      } else if (!isNameUnique(videoName)) {
        setError('Stream name must be unique.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Enter video name'
        value={videoName}
        onChange={(e) => setVideoName(e.target.value)}
        className='mr-2 p-2 border border-gray-300 rounded'
      />
      <input
        type='text'
        placeholder='Enter video URL'
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className='mr-2 p-2 border border-gray-300 rounded'
      />
      <button onClick={handleAddVideo} className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
        Add Video
      </button>
      {error && <p className='text-red-500 ml-2'>{error}</p>}
      {successMessage && <p className='text-green-500 ml-2'>{successMessage}</p>}
    </div>
  );
};

export default VideoForm;
