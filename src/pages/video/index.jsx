/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import VideoPlayer from './videosComponent/VideoPlayer';
import './video.css';
import { useState, useEffect } from 'react';

const mainVideo = {
  id: 1,
  title: 'Main Video',
  url: 'https://vod-progressive.akamaized.net/exp=1696840336~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2696%2F19%2F488480282%2F2190916809.mp4~hmac=094095efab85c554655854531401889ea764f4f15e0632396b3fc5ceec70b42f/vimeo-prod-skyfire-std-us/01/2696/19/488480282/2190916809.mp4',
};

const initialRelatedVideos = [
  {
    id: 2,
    title: 'Video Stream 1',
    url: 'https://vod-progressive.akamaized.net/exp=1696843883~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1923%2F19%2F484618505%2F2170251814.mp4~hmac=c66984ca666e700bd3bc060474561f8976c619f06be3f8771c065752359faadf/vimeo-prod-skyfire-std-us/01/1923/19/484618505/2170251814.mp4',
  },
  {
    id: 3,
    title: 'Video Stream 2',
    url: 'https://vod-progressive.akamaized.net/exp=1696838652~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2692%2F26%2F663464461%2F3051505737.mp4~hmac=8fcd2791bb838800abb58b922ce5ab9ebe972c2d0a4233b30c71e3c56fa95948/vimeo-prod-skyfire-std-us/01/2692/26/663464461/3051505737.mp4',
  },
  {
    id: 4,
    title: 'Video Stream 3',
    url: 'https://vod-progressive.akamaized.net/exp=1696845685~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2391%2F22%2F561959330%2F2657467901.mp4~hmac=8bdba415c65440dc4ac65f5d5ca27a473097befd1d7aeee321b8d6301122c87a/vimeo-prod-skyfire-std-us/01/2391/22/561959330/2657467901.mp4',
  },
  {
    id: 5,
    title: 'Video Stream 4',
    url: 'https://vod-progressive.akamaized.net/exp=1696845737~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2390%2F22%2F561952529%2F2657435491.mp4~hmac=5af94562c1b2cc6a5796f6af5181525eb8e4883e07cd67ca92e914d52238048c/vimeo-prod-skyfire-std-us/01/2390/22/561952529/2657435491.mp4',
  },
  {
    id: 6,
    title: 'Video Stream 6',
    url: 'https://vod-progressive.akamaized.net/exp=1696845761~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3466%2F18%2F467333229%2F2075417792.mp4~hmac=9f30ff2b1033d53c59e55caa9a433796fbf10e31a774ec37fc69869245fb1be0/vimeo-prod-skyfire-std-us/01/3466/18/467333229/2075417792.mp4',
  },
];

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [relatedVideos, setRelatedVideos] = useState(initialRelatedVideos);

  const handleAddVideo = () => {
    if (videoUrl && relatedVideos.length < 5) {
      const newVideo = {
        id: relatedVideos.length + 1,
        title: `Video Stream ${relatedVideos.length + 1}`,
        url: videoUrl,
      };

      setRelatedVideos([...relatedVideos, newVideo]);
      setVideoUrl(''); // Clear the input field after adding the video
    }
  };

  useEffect(() => {
    if (relatedVideos.length < 5) {
      setRelatedVideos(initialRelatedVideos.slice(0, 5));
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="mt-20">
      <h1 className="title">Video Streaming</h1>
      {/* <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleAddVideo}>Add Video</button> */}
      <VideoPlayer mainVideo={mainVideo} relatedVideos={relatedVideos} />
    </div>
  );
}

export default App;
