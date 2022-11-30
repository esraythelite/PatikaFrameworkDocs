import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'      
import ExcelImporterExtensions from './ExcelImporterExtensions'      
import ExcelExporterExtensions from './ExcelExporterExtensions'      

const ExcelExtensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('ExcelExporterExtensions');
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
            <Tab label='ExcelExporterExtensions' value='ExcelExporterExtensions' sx={{ alignContent: 'center' }} /> 
            <Tab label='ExcelImporterExtensions' value='ExcelImporterExtensions' sx={{ alignContent: 'center' }} /> 
            
          </TabList>

        </Box>  
         <TabPanel value="ExcelExporterExtensions" sx={{ width: width}}>
          <ExcelExporterExtensions />
        </TabPanel>  
        <TabPanel value="ExcelImporterExtensions" sx={{ width: width}}>
          <ExcelImporterExtensions />
        </TabPanel>         
      </TabContext>
    </Box>
  )
}

export default ExcelExtensions