import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid2 } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const CardInfo = ({cardDetails}) => {
  return (
    <>
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <Item sx={{ my: 2, mx: 'auto', p: 2 }}>
        <Grid2 container spacing={6} columnSpacing={6} style={{display: 'flex'}}>
          {
            cardDetails?.map((card) => {
              return (
                <>
                    <Card sx={{ maxWidth: 375 }} style={{width:'22%'}}>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="card-label">
                              {(card.title.substring(0, 1))}
                            </Avatar>
                          }
                          title={card.title}
                        />
                        <CardContent>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {card.subHeader}
                          </Typography>
                        </CardContent>
                    </Card>
                </>
              )
            })
          }
        </Grid2>
      </Item>
    </Box>
    </>
    
  );
}

export default CardInfo;
