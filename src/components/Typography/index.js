import React from 'react';
import PropTypes from 'prop-types';
import { StyledTypography } from './styles';

const Typography = (props) => {
  return (
    <StyledTypography
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      letterSpacing={props.letterSpacing}
      fontFamily={props.fontFamily}
      variant={props.variant}
    >
      {props.children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  letterSpacing: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string
};

Typography.defaultProps = {
  children: PropTypes.node.isRequired,
  variant: 'Typography',
};

export default Typography;
