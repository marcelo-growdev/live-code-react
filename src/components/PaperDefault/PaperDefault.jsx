import { Typography } from '@mui/material';
import React from 'react';
import { PaperStyled } from './Styleds';

function PaperDefault({ title, body, elevation }) {
  return (
    <PaperStyled elevation={elevation}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2" textAlign="justify">
        {body}
      </Typography>
    </PaperStyled>
  );
}

export default PaperDefault;
