import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'     
import StorageService from './StorageService'  
import AmazonStorageService from './AmazonStorageService';
import AzureStorageService from './AzureStorageService';
import Validators from './Validators';


const StorageServices = () => {

  const [selectedTab, setSelectedTab] = React.useState('StorageService');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%',   typography: 'body1' }}
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
            <Tab label='StorageService' value='StorageService' sx={{ alignContent: 'center' }} /> 
            <Tab label='AmazonStorageService' value='AmazonStorageService' sx={{ alignContent: 'center' }} /> 
            <Tab label='AzureStorageService' value='AzureStorageService' sx={{ alignContent: 'center' }} /> 
            <Tab label='Validators' value='Validators' sx={{ alignContent: 'center' }} /> 
             
          </TabList>
        </Box>
        <TabPanel value="StorageService" sx={{ width: width}}>
          <StorageService />
        </TabPanel>    
        <TabPanel value="AmazonStorageService" sx={{ width: width}}>
          <AmazonStorageService />
        </TabPanel>
        <TabPanel value="AzureStorageService" sx={{ width: width}}>
          <AzureStorageService />
        </TabPanel>
        <TabPanel value="Validators" sx={{ width: width}}>
          <Validators />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default StorageServices