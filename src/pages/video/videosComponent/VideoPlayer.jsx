/* eslint-disable react/prop-types */
import { useState } from 'react';
import VideoList from './VideoList';

const VideoPlayer = ({ mainVideo, relatedVideos }) => {
  const [selectedVideo, setSelectedVideo] = useState(mainVideo);

  const playMainVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="relative ">
    <div className=" flex flex-col text-start justify-center   overflow-hidden">
        <video controls width={'1000'} className=' rounded-[30px]' src={selectedVideo.url} />
        
      </div>
      <div className='mt-3'>
      <span className='mt-3 shadow rounded text-xl font-semibold bg-white px-4 p-1'>{selectedVideo.title}
      </span>
      </div>

      <VideoList videos={relatedVideos} onVideoSelect={playMainVideo} />
    </div>
  );
};

export default VideoPlayer;
