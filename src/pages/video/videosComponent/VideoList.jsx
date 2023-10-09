/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import{ useState } from "react";

const VideoList = ({ videos, onVideoSelect }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    onVideoSelect(video);
  };

  return (
    <div className="flex gap-3 mt-10 overflow-x-auto ">
      {videos.map((video, index) => (
        <div className=""  key={index}>
          <div
          className="relative flex justify-center items-center rounded-[20px] w-[340px] h-[200px]  overflow-hidden"
          onClick={() => handleVideoClick(video)}
        >
        <video  src={video.url} className="overflow-hidden"/>
          <h1 className="absolute text-center text-white">{video.title}</h1>
        </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
