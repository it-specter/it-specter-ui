import React from 'react';
import StyledCard from './Card.styles';

const Card = ({ children, height, color }) => {
  return (
    <StyledCard height={height} color={color}>
      {children}
    </StyledCard>
  );
};

export default Card;
