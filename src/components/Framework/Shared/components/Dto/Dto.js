import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'   
import CommonDto from './CommonDto';
import Identity from './Identity';

const DTO = () => {

  const [selectedTab, setSelectedTab] = React.useState('CommonDTOs');
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
            <Tab label={"CommonDTO's"} value='CommonDTOs' sx={{ alignContent: 'center' }} />
            <Tab label={"IdentityDTO's"} value='IdentityDTOs' sx={{ alignContent: 'center' }} />  
          </TabList>

        </Box>
        <TabPanel value="CommonDTOs" sx={{ width: width}}>
          <CommonDto />
        </TabPanel>
        <TabPanel value="IdentityDTOs" sx={{ width: width }}>
          <Identity />
        </TabPanel>  
        
      </TabContext>
    </Box>
  )
}


export default DTO