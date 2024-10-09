import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Cards from './Cards';
import Details from './Details';
import StudentInfo from './StudentsInfo';
import SearchBar from './SearchBar';

const Dashboard = () => {
    const cardDetails = [{
        title: 'Self Service Automations',
        subHeader: '20%',
        details: ''
    },
    {
        title: 'SLO/Lead',
        subHeader: '67%',
        details: ''
    },
    {
        title: 'OM Process',
        subHeader: '28%',
        details: ''
    },
    {
        title: 'Task Assignments',
        subHeader: '30%',
        details: ''
    }];

  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
        </Box>
      <div className='main-container'>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
            <Cards cardDetails={cardDetails} />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }} marginRight={3} marginLeft={3}>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }}>
                <Details />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'right' }}>
                <StudentInfo />
            </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Dashboard;
