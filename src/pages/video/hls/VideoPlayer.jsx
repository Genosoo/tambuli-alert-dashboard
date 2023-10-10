/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import ReactHLSPlayer from 'react-hls-player';
import '../video.css';

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [videoSources, setVideoSources] = useState([
    { name: 'Video 1', url: 'http://192.168.1.57:8088/hls/obs_stream.m3u8', error: '' },
    { name: 'Video 2', url: 'http://192.168.1.57:8088/hls/video1.m3u8', error: '' },
    { name: 'Video 3', url: 'http://192.168.1.57:8088/hls/video2.m3u8', error: '' },
    { name: 'Video 4', url: 'http://192.168.1.57:8088/hls/video3.m3u8', error: '' },
    { name: 'Video 5', url: 'http://192.168.1.57:8088/hls/video4.m3u8', error: '' },
    { name: 'Video 6', url: 'http://192.168.1.57:8088/hls/video5.m3u8', error: '' },
  ]);

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
      {/* Video Container */}
      <div className="relative">
      <div className="w-[100%] h-[65vh]  flex flex-col items-center rounded-[20px] justify-center overflow-hidden  bg-[#002D4A]">

{videoSources[selectedVideo].error ? (
  <p className='text-4xl text-white p-4'>{videoSources[selectedVideo].error}</p>
) : (
  <ReactHLSPlayer
    src={videoSources[selectedVideo].url}
    autoPlay={true}
    controls={true}
    className='max-w-none w-[100%] h-[100%] o'
  />
)}
</div>
<h2 className='text-black text-2xl  text-center'>{videoSources[selectedVideo].name}</h2>

      </div>
      {/* Video List */}
      <div className="">
        <div className='flex gap-5 overflow-x-auto video-scroll p-2'>
          {videoSources.map((video, index) => (
            <div
              key={index}
              className='relative  flex items-center justify-center '
              onClick={() => setSelectedVideo(index)}
            >
              <h2 className='absolute rounded bg-[#00000045] px-5 text-xl font-semibold uppercase text-white'>{video.name}</h2>
              {video.error ? (
                <h2 className='bg-[#002D4A] z-10 rounded-[30px] w-[300px] h-[180px] flex items-center justify-center text-white'>{video.error}</h2>
              ) : (
                <div className='border bg-slate-400 rounded-[30px] hover:bg-slate-700 duration-300 w-[300px] h-[180px] overflow-hidden'>
                  <ReactHLSPlayer
                  src={video.url}
                  autoPlay={true}
                  muted={true}
                  controls={false}
                  className='text-white  w-[100%] h-[100%] object-fill'
                />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
