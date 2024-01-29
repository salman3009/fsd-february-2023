import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'salmon',
    }),
  },
});

export default function TextButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack gap={2} alignItems="center">
        <Button variant="contained" color="salmon">
          Salmon
        </Button>
      </Stack>
    </ThemeProvider>
  );
}