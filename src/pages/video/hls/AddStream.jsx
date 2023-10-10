/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import VideoForm from './AddStreamForm';


const VideoPlayer = () => {
  const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
  const [videoSources, setVideoSources] = useState(savedVideos);

  // Save video data to localStorage whenever videoSources changes
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videoSources));
  }, [videoSources]);

  const handleAddVideo = (newVideo) => {
    setVideoSources([...videoSources, newVideo]);
  };


  useEffect(() => {
    // Check if the URL is accessible and set error message if not
    const checkVideoUrls = async () => {
      const updatedSources = await Promise.all(
        videoSources.map(async (video) => {
          try {
            const response = await fetch(video.url);
            if (!response.ok) {
              return { ...video, error: 'Video URL not available' };
            } else {
              return video;
            }
          } catch (error) {
            return { ...video, error: 'Video URL not available' };
          }
        })
      );
      setVideoSources(updatedSources);
    };

    checkVideoUrls();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className='px-4'>
      <h1 className='text-2xl mb-3 font-semibold'>Add Stream</h1>
      <VideoForm onAddVideo={handleAddVideo} videoSources={videoSources} />
    </div>
  );
};

export default VideoPlayer;
