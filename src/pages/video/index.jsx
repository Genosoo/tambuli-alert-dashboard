import VideoPlayer from "./hls/VideoPlayer";

function App() {
  return (
    <div className="mt-20">
       <h1 className="title">Video Streaming</h1>
      <div className="w-[100%]">
      <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
