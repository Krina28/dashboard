import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Cards from './Cards';
import { Stack, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { valueFormatter } from './data';

export default function CardInfo() {
    const cardDetails = [{
        title: 'Submitted encounters',
        subHeader: '10k',
        details: ''
    },
    {
        title: 'Accepted Processed Encs',
        subHeader: '1.6k',
        details: ''
    },
    {
        title: 'Rejected Encs',
        subHeader: '1k',
        details: ''
    },
    {
        title: 'Encounters Errored',
        subHeader: '500',
        details: ''
    }];

    const pieChartData = [
        {
            label: 'Processed',
            value: 63,
          },
          {
            label: 'Rejected',
            value: 15,
          },
          {
            label: 'Errored',
            value: 22,
          },
    ]

    const series = [
        {
          innerRadius: 135,
          outerRadius: 100,
          id: 'OS-series',
          data: pieChartData,
          valueFormatter,
        },
    ];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const seriesData = ['0', '2K', '4K', '6K', '8K', '10K', '12K', '14K', '16K', '18K', '20K'];
      
  return (
    <>
        <div className='main-container'>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                <Cards cardDetails={cardDetails} />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }} marginRight={3} marginLeft={3}>
                <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }} 
                style={{ border: '1px solid white', backgroundColor: 'white', borderRadius: 8, padding: 5 }}>
                    <Typography variant="h5" gutterBottom>
                        Encounter Data
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }}>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: months }]}
                            yAxis={[{ data: seriesData, dataKey: 'months' }]}
                            series={[{ data: [3, 5] }, { data: [3, 5] }, { data: [6, 8] }]}
                            width={500}
                            height={300}
                        />
                    </Stack>
                </Stack>
                <Stack width={'100%'} direction="row" sx={{ alignItems: 'right' }}
                    style={{ border: '1px solid white', backgroundColor: 'white', borderRadius: 8, padding: 5 }}>
                        <Typography variant="h5" gutterBottom>
                            Traffic source
                        </Typography>
                        <Stack spacing={2} direction="row" sx={{ alignItems: 'left' }}>
                            <PieChart
                                series={series}
                                width={400}
                                height={300}
                            />
                        </Stack>
                </Stack>
            </Stack>
        </div>
    </>
  );
}
