import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import DbContext from './DbContext';
import IRepositoryIdentityShared from './IRepositoryIdentityShared';
import RepositoryIdentityShared from './RepositoryIdentityShared';
import EntitiesIdentityShared from './EntitiesIdentityShared';

const IdentitySharedDbContext = () => {

  const [selectedTab, setSelectedTab] = React.useState('DbContext');
  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const width = '95%';
  return (
    <Box
      sx={{ width: '100%',  typography: 'body1' }}
    >
      <TabContext value={selectedTab}  >
        <Box sx={{  position: "fixed", bgcolor: grey[50] , border: 2,   borderColor: 'divider'   }}>
          <TabList
            onChange={handleChangeTab}
            //orientation="vertical"  
            sx={{ alignContent: 'center', overflow: 'visible' }}
            selectionFollowsFocus
          >
            <Tab label='IdentityServerDbContext' value='DbContext' sx={{ alignContent: 'center' }} />
            <Tab label='Entities' value='Entities' sx={{ alignContent: 'center' }} />
            <Tab label='Repository Interfaces' value='IRepository' sx={{ alignContent: 'center' }} />
            <Tab label='Repository' value='Repository' sx={{ alignContent: 'center' }} />
          </TabList>

        </Box>
        <TabPanel value="DbContext" sx={{ width: width }}>
          <DbContext />
        </TabPanel>
        <TabPanel value="Entities" sx={{ width: width }}>
          <EntitiesIdentityShared />
        </TabPanel>
        <TabPanel value="IRepository" sx={{ width: width }} >
          <IRepositoryIdentityShared />
        </TabPanel>
        <TabPanel value="Repository" sx={{ width: width }} >
          <RepositoryIdentityShared />
        </TabPanel>

      </TabContext>
    </Box>
  )
}
export default IdentitySharedDbContext