// React
import React from 'react';

// Styles
import { Stack, Typography, Divider } from '@mui/material';

// Icons
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Title() {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      divider={<Divider orientation="vertical" />}
    >
      <ChecklistIcon style={{ fontSize: 100 }} />
      <Typography data-testid="main-page-title" style={{ fontSize: 50 }}>
        Todo List
      </Typography>
    </Stack>
  );
}