import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { grey, purple } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import AppleAuthProviderExtension from './AppleAuthProviderExtension'
import ClientSecretGenerator from './ClientSecretGenerator'

const AppleAuthProviderExtensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('ClientSecretGenerator');
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
            <Tab label='ClientSecretGenerator' value='ClientSecretGenerator' sx={{ alignContent: 'center' }} />
            <Tab label='AppleAuthProviderExtension' value='AppleAuthProviderExtension' sx={{ alignContent: 'center' }} />
          </TabList>
        </Box>
        <TabPanel value="ClientSecretGenerator" sx={{ width: width }}>
          <ClientSecretGenerator />
        </TabPanel>
        <TabPanel value="AppleAuthProviderExtension" sx={{ width: width }}>
          <AppleAuthProviderExtension />
        </TabPanel>

      </TabContext>
    </Box>
  )
}

export default AppleAuthProviderExtensions