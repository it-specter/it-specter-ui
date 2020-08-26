import React from 'react';
import StyledCard from './Card.styles';

const Card = ({
  children,
  height,
  color
}) => {
  return /*#__PURE__*/React.createElement(StyledCard, {
    height: height,
    color: color
  }, children);
};

export default Card;