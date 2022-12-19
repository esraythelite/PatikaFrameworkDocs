import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'  
import TenantService from './TenantService'; 

const ServicesIdentityShared = () => {

  const [selectedTab, setSelectedTab] = React.useState('TenantService');
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
            <Tab label='TenantService' value='TenantService' sx={{ alignContent: 'center' }} />
           </TabList>

        </Box>
        <TabPanel value="TenantService" sx={{ width: width }}>
          <TenantService />
        </TabPanel> 
      </TabContext>
    </Box>
  )
}
export default ServicesIdentityShared