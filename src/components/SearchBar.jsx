import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    ...theme.applyStyles('dark', {
      backgroundColor: 'none',
    }),
    border: 'none',
    boxShadow: 'none'
  }));
  

export default function SearchBar() {
  return (
    <> 
    <Stack direction="row" spacing={2} alignItems={'center'} marginRight={20} marginLeft={20}>
        <Item>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="search-basic" label="Search here" variant="standard" />
            </Box>
        </Item>
        <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
            </DemoContainer>
            </LocalizationProvider>
        </Item>
        <Item>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="search-basic" label="Search here" variant="standard" />
            </Box>
        </Item>
        <Item>
        <Button variant="outlined" startIcon={<SearchIcon />}>
            Search
        </Button>
        </Item>
    </Stack>
    </>
  );
}
