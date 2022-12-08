import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab' 
import PerfectCommit from './PerfectCommit';
import PerfectCommitMessage from './PerfectCommitMessage';
import Branching from './Branching';
import PullRequests from './PullRequests'; 
import MergeConflicts from './MergeConflicts';

const GitFlow = () => {

  const [selectedTab, setSelectedTab] = React.useState('PerfectCommit');
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
            // orientation="vertical" 
            indicatorColor="primary"
            sx={{ alignContent: 'center', overflow: 'visible' , zIndex:1300}}
            selectionFollowsFocus 
          >
            <Tab label='Perfect Commit' value='PerfectCommit' sx={{ alignContent: 'center' }} />
            <Tab label='Perfect Commit Message' value='PerfectCommitMessage' sx={{ alignContent: 'center' }} />
            <Tab label='Branching' value='Branching' sx={{ alignContent: 'center' }} />
            <Tab label='Pull Requests' value='PullRequests' sx={{ alignContent: 'center' }} />
            <Tab label='Merge Conflicts' value='MergeConflicts' sx={{ alignContent: 'center' }} />
          </TabList>
        </Box>
        <TabPanel value="PerfectCommit" sx={{ width: width }}>
          <PerfectCommit />
        </TabPanel>
        <TabPanel value="PerfectCommitMessage" sx={{ width: width }}>
          <PerfectCommitMessage/>
        </TabPanel>
        <TabPanel value="Branching" sx={{ width: width }}>
          <Branching/>
        </TabPanel>
        <TabPanel value="PullRequests" sx={{ width: width }}>
          <PullRequests/>
        </TabPanel>
         <TabPanel value="MergeConflicts" sx={{ width: width }}>
          <MergeConflicts/>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
export default GitFlow
