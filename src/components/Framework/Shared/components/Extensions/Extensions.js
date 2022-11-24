import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { grey, purple } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'    
import EnumHelper from './EnumHelper';
import FlagEnumExtensions from './FlagEnumExtensions';
import ResponseExtensions from './ResponseExtensions';
import GeneralTypeExtensions from './GeneralTypeExtensions';
import LinqExtensions from './LinqExtensions';
import LogWriterExtensions from './LogWriterExtensions';

const Extensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('EnumHelper');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%',  typography: 'body1' }}
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
            <Tab label='EnumHelper' value='EnumHelper' sx={{ alignContent: 'center' }} />
            <Tab label='FlagEnum' value='FlagEnumExtensions' sx={{ alignContent: 'center' }} />  
            <Tab label='GeneralResponseDTO' value='GeneralResponseDTOExtensions' sx={{ alignContent: 'center' }} />  
            <Tab label='GeneralType' value='GeneralTypeExtensions' sx={{ alignContent: 'center' }} />  
            <Tab label='Linq' value='LinqExtensions' sx={{ alignContent: 'center' }} />  
            <Tab label='LogWriter' value='LogWriterExtensions' sx={{ alignContent: 'center' }} />  
            
          </TabList>

        </Box>
        <TabPanel value="EnumHelper" sx={{ width: width}}>
          <EnumHelper />
        </TabPanel>
        <TabPanel value="FlagEnumExtensions" sx={{ width: width}}>
          <FlagEnumExtensions />
        </TabPanel>
        <TabPanel value="GeneralResponseDTOExtensions" sx={{ width: width }}>
          <ResponseExtensions />
        </TabPanel>  
        <TabPanel value="GeneralTypeExtensions" sx={{ width: width }}>
          <GeneralTypeExtensions />
        </TabPanel>  
        <TabPanel value="LinqExtensions" sx={{ width: width }}>
          <LinqExtensions />
        </TabPanel>  
        <TabPanel value="LogWriterExtensions" sx={{ width: width }}>
          <LogWriterExtensions />
        </TabPanel>  
        
      </TabContext>
    </Box>
  )
}


export default Extensions