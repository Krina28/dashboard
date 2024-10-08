import React from 'react';
import Stack from '@mui/material/Stack';

import CardInfo from './CardInfo';
import Header from './Header';
import Details from './Details';
import StudentInfo from './StudentsInfo';

const Dashboard = () => {
    const cardDetails = [{
        title: 'Self Service Automations',
        subHeader: 'Redirects to Self Service Automations',
        details: ''
    },
    {
        title: 'SLO/Lead',
        subHeader: 'Redirects to SLO/Lead',
        details: ''
    },
    {
        title: 'OM Process',
        subHeader: 'Redirects to OM Process',
        details: ''
    },
    {
        title: 'Task Assignments',
        subHeader: 'Redirects to Task Assignments',
        details: ''
    }];

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
            <CardInfo cardDetails={cardDetails} />
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
