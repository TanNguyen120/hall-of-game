'use client';
import { Container, Typography } from '@mui/material';
export default function retroHome() {
  return (
    <div>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' mt-10 p-36 bg-slate-800 '>
          <Typography className=' mt-10 p-36 bg-slate-800'>
            This is fine
          </Typography>
        </div>
      </Container>
    </div>
  );
}
