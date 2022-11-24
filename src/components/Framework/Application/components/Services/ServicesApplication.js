import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { grey, purple } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'  
import BaseService from './BaseService';
import ApplicationService from './ApplicationService';

const ServicesApplication = () => {

  const [selectedTab, setSelectedTab] = React.useState('BaseService');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%',  typography: 'body1' }}
    >
      <TabContext value={selectedTab}  >
        <Box sx={{ position: "fixed", bgcolor: grey[50] , border: 2,   borderColor: 'divider'  }}>
          <TabList
            onChange={handleChangeTab}
            //orientation="vertical" 
              indicatorColor="primary"
            sx={{ alignContent: 'center', overflow: 'visible' }}
            selectionFollowsFocus
          >
            <Tab label='BaseService' value='BaseService' sx={{ alignContent: 'center' }} />
            <Tab label='ApplicationService' value='ApplicationService' sx={{ alignContent: 'center' }} /> 
          </TabList>

        </Box>
        <TabPanel value="BaseService" sx={{ width: width }}>
          <BaseService />
        </TabPanel>
        <TabPanel value="ApplicationService" sx={{ width: width }}>
          <ApplicationService />
        </TabPanel>
        
      </TabContext>
    </Box>
  )
}
export default ServicesApplication