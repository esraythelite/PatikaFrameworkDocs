import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ClientServerExtensions from './ClientServerExtensions'
import AuthServerExtensions from './AuthServerExtensions'

const IdentityExtensions = () => {

  const [selectedTab, setSelectedTab] = React.useState('AuthServerExtensions');
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
            <Tab label='AuthServerExtensions' value='AuthServerExtensions' sx={{ alignContent: 'center' }} />
            <Tab label='ClientServerExtensions' value='ClientServerExtensions' sx={{ alignContent: 'center' }} />
          </TabList>
        </Box>
        <TabPanel value="AuthServerExtensions" sx={{ width: width }}>
          <AuthServerExtensions />
        </TabPanel>
        <TabPanel value="ClientServerExtensions" sx={{ width: width }}>
          <ClientServerExtensions />
        </TabPanel>

      </TabContext>
    </Box>
  )
}


export default IdentityExtensions