import React from 'react';
import { StyledCardBasis } from './styles';

const Card = ({ children, color, height, variant }) => {
    return (
      <StyledCardBasis variant={variant} height={height} color={color}>
        {children}
      </StyledCardBasis>
    );
  };

export { Card };
