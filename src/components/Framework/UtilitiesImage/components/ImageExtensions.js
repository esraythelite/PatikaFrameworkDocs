import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'     
import ServiceExtensions from './ServiceExtensions' 
import MagickFormatExtensions from './MagickFormatExtensions'    
import MagickImageExtensions from './MagickImageExtensions'    

const ImageExtensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('ServiceExtensions');
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
            <Tab label='ServiceExtensions' value='ServiceExtensions' sx={{ alignContent: 'center' }} /> 
            <Tab label='MagickFormatExtensions' value='MagickFormatExtensions' sx={{ alignContent: 'center' }} /> 
            <Tab label='MagickImageExtensions' value='MagickImageExtensions' sx={{ alignContent: 'center' }} /> 
            
          </TabList>
        </Box>
        <TabPanel value="ServiceExtensions" sx={{ width: width}}>
          <ServiceExtensions />
        </TabPanel>   
        <TabPanel value="MagickFormatExtensions" sx={{ width: width}}>
          <MagickFormatExtensions />
        </TabPanel> 
        <TabPanel value="MagickImageExtensions" sx={{ width: width}}>
          <MagickImageExtensions />
        </TabPanel>          
      </TabContext>
    </Box>
  )
}


export default ImageExtensions