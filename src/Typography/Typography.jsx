import React from 'react';
import { node, string } from 'prop-types';
import StyledTypography from './Typography.styles';

const Typography = ({ variant, color, children, alignself }) => {
  return (
    <StyledTypography variant={variant} color={color} alignself={alignself}>
      {children}
    </StyledTypography>
  );
};

// Expected prop values
Typography.propTypes = {
  children: node.isRequired,
  variant: string,
  alignself: string,
  color: string
};

// Default prop values
Typography.defaultProps = {
  children: 'Typography',
  variant: 'Typography',
  color: 'white'
};

export default Typography;
