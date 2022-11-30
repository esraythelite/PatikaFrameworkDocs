import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab' 
import Repository from './Repository';
import Uow from './Uow';

const DomainInterfaces = () => {

  const [selectedTab, setSelectedTab] = React.useState('Uow');
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
            <Tab label='Unit of Work' value='Uow' sx={{ alignContent: 'center' }} />
            <Tab label='Repository' value='Repository' sx={{ alignContent: 'center' }} /> 
          </TabList>

        </Box>
        <TabPanel value="Uow" sx={{ width: width }}>
          <Uow />
        </TabPanel>
        <TabPanel value="Repository" sx={{ width: width }}>
          <Repository />
        </TabPanel>
        
      </TabContext>
    </Box>
  )
}

export default DomainInterfaces