'use client';

import { Container } from '@mui/material';

export default function MetroidFusion() {
  return (
    <div className=' bg-gbaBackGround min-h-screen bg-repeat-x'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'></div>
      </Container>
    </div>
  );
}
