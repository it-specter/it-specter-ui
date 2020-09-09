import React from 'react';
import PropTypes from 'prop-types';
import { StyledTypography } from './styles';

const Typography = (props) => {
  return (
    <StyledTypography color={props.color} variant={props.variant}>
      {props.children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

Typography.defaultProps = {
  children: PropTypes.node.isRequired,
  variant: 'Typography',
};

export default Typography;
