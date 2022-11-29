import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { grey, purple } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import HttpClientService from './HttpClientService';
import InMemoryCacheService from './InMemoryCacheService';
import NullLogWriter from './NullLogWriter';
import Sha256Hasher from './Sha256Hasher';
import CoreService from './CoreService';

const Services = () => {

  const [selectedTab, setSelectedTab] = React.useState('CoreService');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%', typography: 'body1' }}
    >
      <TabContext value={selectedTab}  >
        <Box sx={{ position: "fixed", bgcolor: grey[50], border: 2, borderColor: 'divider' }}>
          <TabList
            onChange={handleChangeTab}
            //orientation="vertical" 
            indicatorColor="primary"
            sx={{ alignContent: 'center', overflow: 'visible' }}
            selectionFollowsFocus
          >
            <Tab label='CoreService' value='CoreService' sx={{ alignContent: 'center' }} />
            <Tab label='HttpClientService' value='HttpClientService' sx={{ alignContent: 'center' }} />
            <Tab label='InMemoryCacheService' value='InMemoryCacheService' sx={{ alignContent: 'center' }} />
            <Tab label='NullLogWriter' value='NullLogWriter' sx={{ alignContent: 'center' }} />
            <Tab label='Sha256Hasher' value='Sha256Hasher' sx={{ alignContent: 'center' }} />

          </TabList>

        </Box>
        <TabPanel value="CoreService" sx={{ width: width }}>
          <CoreService />
        </TabPanel>
        <TabPanel value="HttpClientService" sx={{ width: width }}>
          <HttpClientService />
        </TabPanel>
        <TabPanel value="InMemoryCacheService" sx={{ width: width }}>
          <InMemoryCacheService />
        </TabPanel>
        <TabPanel value="NullLogWriter" sx={{ width: width }}>
          <NullLogWriter />
        </TabPanel>
        <TabPanel value="Sha256Hasher" sx={{ width: width }}>
          <Sha256Hasher />
        </TabPanel>

      </TabContext>
    </Box>
  )
}

export default Services