import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ width: 400, padding: 2 }}>
        <Stack sx={{ gap: 2 }}>
          <Typography variant="h6">Employee Form</Typography>
          {children}
        </Stack>
      </Paper>
    </Box>
  );
}

export default Container;
