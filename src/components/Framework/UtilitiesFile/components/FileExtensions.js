import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'     
import FileConversionExtensions from './FileConversionExtensions'    

const FileExtensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('FileConversionExtensions');
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
            <Tab label='FileConversionExtensions' value='FileConversionExtensions' sx={{ alignContent: 'center' }} /> 
            
          </TabList>

        </Box>
        <TabPanel value="FileConversionExtensions" sx={{ width: width}}>
          <FileConversionExtensions />
        </TabPanel>         
      </TabContext>
    </Box>
  )
}

export default FileExtensions