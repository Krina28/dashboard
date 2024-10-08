import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function StudentInfo() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">All</Typography>
            <Typography variant="h4">970</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">Active</Typography>
            <Typography variant="h4">780</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">InActive</Typography>
            <Typography variant="h4">100</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">Miscellaneous</Typography>
            <Typography variant="h4">90</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">Special</Typography>
            <Typography variant="h4">10</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="caption">Non-Reporting</Typography>
            <Typography variant="h4">40</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
