/* eslint-disable react/prop-types */
import{ useState } from "react";
import { AppBar, Box, Tab, Tabs,  } from "@mui/material";
import VideoPlayer from "./hls/VideoPlayer";
import AllStreams from "./hls/AllStreams"
import AddStream from "./hls/AddStream"

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="mt-20">
      <h1 className="title">Video Streaming</h1>
      <div className="">
      <AppBar position="static" sx={{background:"transparent", width:"99%", boxShadow:"none"}}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Video Stream" />
          <Tab label="All Streams" />
          <Tab label="Add Stream" />
        </Tabs>
      </AppBar>
      <div className="w-[100%] p-4">
        <TabPanel value={tabValue} index={0}>
          <VideoPlayer />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <AllStreams/>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <AddStream />
        </TabPanel>
      </div>
      </div>
    </div>
  );
}

const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default App;
