import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from './Table/Table'
import Report from './Report/Report';
import Map from './Map/Map';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabContainer'>
      <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Table" value="1" />
            <Tab label="Report" value="2" />
            <Tab label="Map" value="3" />
          </TabList>
          <TabPanel value="1">
            <Table />
        </TabPanel>
        <TabPanel value="2">
          <Report />
        </TabPanel>
        <TabPanel value="3">
          <Map />
        </TabPanel>
       
      </TabContext>
    </div>
  );
}
