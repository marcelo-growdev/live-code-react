import React from 'react';
import { ButtonStyled } from './Styleds';

function ButtonDefault({ name }) {
  return <ButtonStyled variant="contained">{name}</ButtonStyled>;
}

export default ButtonDefault;
