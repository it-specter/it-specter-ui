import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './styles';

const Card = (props) => {
  return (
    <StyledCard
      color={props.color}
      height={props.height}
      variant={props.variant}
    >
      {props.children}
    </StyledCard>
  );
};

Card.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
};

// Card.defaultProps = {
//   children: PropTypes.node.isRequired,
//   variant: 'Card',
// };

export default Card;
