import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'  
import DbContextWithUOW from './DbContextWithUOW';
import GenericRepository from './GenericRepository';
import DomainRepository from './DomainRepository';
import LogRepository from './LogRepository';
import LogWriter from './LogWriter';
import RedisConnectionHelper from './RedisConnectionHelper';

const DomainServices = () => {

  const [selectedTab, setSelectedTab] = React.useState('DbContextWithUOW');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%' , typography: 'body1' }}
    >
      <TabContext value={selectedTab}  >
        <Box sx={{   position: "fixed", bgcolor: grey[50] , border: 2,   borderColor: 'divider'  }}>
          <TabList
            onChange={handleChangeTab}
            //orientation="vertical" 
              indicatorColor="primary"
            sx={{ alignContent: 'center', overflow: 'visible' }}
            selectionFollowsFocus
          >
            <Tab label='DbContextWithUOW' value='DbContextWithUOW' sx={{ alignContent: 'center' }} />
            <Tab label='GenericRepository' value='GenericRepository' sx={{ alignContent: 'center' }} /> 
            <Tab label='Repository' value='Repository' sx={{ alignContent: 'center' }} /> 
            <Tab label='LogRepository' value='LogRepository' sx={{ alignContent: 'center' }} /> 
            <Tab label='LogWriter' value='LogWriter' sx={{ alignContent: 'center' }} /> 
            <Tab label='RedisConnectionHelper' value='RedisConnectionHelper' sx={{ alignContent: 'center' }} /> 
          </TabList>

        </Box>
        <TabPanel value="DbContextWithUOW" sx={{ width: width}}>
          <DbContextWithUOW />
        </TabPanel>
        <TabPanel value="GenericRepository" sx={{ width: width }}>
          <GenericRepository />
        </TabPanel> 
        <TabPanel value="Repository" sx={{ width: width }}>
          <DomainRepository />
        </TabPanel>
        <TabPanel value="LogRepository" sx={{ width: width }}>
          <LogRepository />
        </TabPanel>
        <TabPanel value="LogWriter" sx={{ width: width }}>
          <LogWriter />
        </TabPanel>
        <TabPanel value="RedisConnectionHelper" sx={{ width: width }}>
          <RedisConnectionHelper />
        </TabPanel>
        
      </TabContext>
    </Box>
  )
}


export default DomainServices