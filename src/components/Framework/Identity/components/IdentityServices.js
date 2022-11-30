import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ExternalIdentityService from './ExternalIdentityService'
import IdentityService from './IdentityService'
import NullEmailSender from './NullEmailSender'

const IdentityServices = () => {

  const [selectedTab, setSelectedTab] = React.useState('IdentityService');
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
            <Tab label='IdentityService' value='IdentityService' sx={{ alignContent: 'center' }} />
            <Tab label='ExternalIdentityService' value='ExternalIdentityService' sx={{ alignContent: 'center' }} />
            <Tab label='NullEmailSender' value='NullEmailSender' sx={{ alignContent: 'center' }} />
          </TabList>
        </Box>
        <TabPanel value="IdentityService" sx={{ width: width }}>
          <IdentityService />
        </TabPanel>
        <TabPanel value="ExternalIdentityService" sx={{ width: width }}>
          <ExternalIdentityService />
        </TabPanel>
        <TabPanel value="NullEmailSender" sx={{ width: width }}>
          <NullEmailSender />
        </TabPanel>

      </TabContext>
    </Box>
  )
}

export default IdentityServices