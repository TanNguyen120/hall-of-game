import { Box, Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        bgcolor: '#0c0c0c',
        gridTemplateRows: 'repeat(3, 1fr)',
      }}
    >
      <Typography color='common.white' align='center' sx={{ p: 5 }}>
        Project Hall Of Game 2023
      </Typography>
      <Typography color='white' align='center'>
        Author: Nguyen Viet Tan
      </Typography>
    </Box>
  );
}
