/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import ReactHLSPlayer from 'react-hls-player';


const VideoPlayer = () => {
  const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
  const [videoSources, setVideoSources] = useState(savedVideos);

  // Save video data to localStorage whenever videoSources changes
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videoSources));
  }, [videoSources]);



  const handleDeleteVideo = (id) => {
    const updatedSources = videoSources.filter((video) => video.id !== id);
    setVideoSources(updatedSources);
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
      {/* Video List */}
      <div className=''>
        {videoSources.length === 0 ? (
          <p className='text-2xl mt-5'>No videos available. Add videos using the form above.</p>
        ) : (
          <div className='flex gap-5  flex-wrap overflow-x-auto video-scroll p-2'>
            {videoSources.map((video) => (
              <div key={video.id} className='relative flex  justify-center '>
                <h2 className='absolute rounded bg-[#00000045]  px-5 mt-3 text-sm font-semibold uppercase text-white'>{video.name}</h2>
                {video.error ? (
                  <div>
                    <div className='bg-[#002D4A] z-10 rounded-[30px]  sm:w-[500px] sm:h-[300px]  flex items-center justify-center text-white'>
                    {video.error}
                  </div>
                  <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className='bg-red-500   text-white px-3 p-2 text-xs rounded-full hover:bg-red-600 mt-2'
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className=''>
                    <div className='border  bg-slate-400 rounded-[30px] hover:bg-slate-700 duration-300 w-[500px] h-[300px]  overflow-hidden'>
                    <ReactHLSPlayer
                      src={video.url}
                      autoPlay={true}
                      muted={true}
                      controls={true}
                      className='text-white  w-[100%] h-[100%] object-fill'
                    />
                    
                  </div>
                    <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className='bg-red-500  text-white px-3 p-2 text-xs rounded-full hover:bg-red-600 mt-2'
                      
                    >
                      Delete
                    </button>
                  </div>
                  
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
